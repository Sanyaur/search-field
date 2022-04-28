import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Input from "./components/Input";
import Loader from "./components/Loader";

function App() {
  // API content soon™
  const [content, setContent] = useState("");
  // input search value
  const [search, setSearch] = useState("");
  // search results
  const [filteredData, setFilteredData] = useState("");

  const searchedContent = (searchKey) => {
    // returns an array of items which includes the search key from the Input field
    const searchResults = content.filter((user) =>
      // combines first and last name
      `${user.first_name + user.last_name}`
        .toLowerCase()
        .includes(searchKey.toLowerCase())
    );

    // sets filtered data
    setFilteredData(searchResults);
  };

  const callUsers = async () => {
    // calling API
    const response = await fetch("https://reqres.in/api/users?page=2");
    const responseJson = await response.json();
    const data = await responseJson.data;

    // API DATA set as new state
    setContent(data);
  };

  // prevents infinite loop, calling API only once
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
        <ul style={{ listStyleType: "none" }}>
          {filteredData ? (
            filteredData.map((user) => (
              <li style={{ marginBottom: "1rem" }} key={user.id}>
                <div>
                  <img src={user.avatar} alt='' />
                </div>
                <div>{user.email}</div>
                <div>
                  {user.first_name} {user.last_name}
                </div>
              </li>
            ))
          ) : content ? (
            content.map((user) => (
              <li style={{ marginBottom: "1rem" }} key={user.id}>
                <div>
                  <img src={user.avatar} alt='' />
                </div>
                <div>{user.email}</div>
                <div>
                  {user.first_name} {user.last_name}
                </div>
              </li>
            ))
          ) : (
            <>
              <Loader />
              <Loader />
              <Loader />
              <Loader />
              <Loader />
            </>
          )}
        </ul>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default App;
