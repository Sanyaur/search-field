import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Input from "./components/Input";
import Loader from "./components/Loader";
import UserCard from "./components/UserCard";

function App() {
  // API content soon™
  const [content, setContent] = useState("");
  // input search value
  const [search, setSearch] = useState("");
  // search results
  const [filteredData, setFilteredData] = useState("");

  const searchedContent = (searchKey) => {
    // returns an array of items which includes the search key from the search Input field
    const searchResults = content.filter((user) =>
      // combines first and last name
      `${user.first_name + " " + user.last_name}`
        .toLowerCase()
        .includes(searchKey.toLowerCase())
    );

    // sets filtered data based on search results
    searchResults.length !== 0
      ? setFilteredData(searchResults)
      : setFilteredData(null);
  };

  const callUsers = async () => {
    // ----------------- NEW VERSION WITH PROMISE.ALL API CALL -----------------
    Promise.all([
      fetch("https://reqres.in/api/users?page=1"),
      fetch("https://reqres.in/api/users?page=2"),
    ])
      .then(async ([aa, bb]) => {
        const a = await aa.json();
        const b = await bb.json();
        return [...a.data, ...b.data];
      })
      .then((responseText) => {
        console.log(responseText);
        setContent(responseText);
      })
      .catch((err) => {
        console.log(err);
      });

    // ----------------- PREVIOUS VERSION WITH SINGLE API CALL -----------------
    // calling API
    // const response = await fetch("https://reqres.in/api/users?page=2");
    // const responseJson = await response.json();
    // const data = await responseJson.data;

    // API DATA set as new state
    // console.log(data);
    // setContent(data);
  };

  // prevents infinite loop, calling API function only once
  useEffect(() => {
    callUsers();
  }, []);

  return (
    <>
      <Container>
        <Input
          search={search}
          setSearch={setSearch}
          searchedContent={searchedContent}
        />
      </Container>
      <Container>
        {filteredData ? (
          filteredData.map((user) => <UserCard key={user.id} user={user} />)
        ) : filteredData === null ? (
          <div>no search results</div>
        ) : content ? (
          content.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
          <>
            {/* bunc of loaders for optical illusion */}
            <Loader />
            <Loader />
            <Loader />
            <Loader />
            <Loader />
          </>
        )}
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default App;
