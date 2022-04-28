import React from "react";
import styled from "styled-components";

const Component = styled.input`
  margin: 30px;
  width: 30rem;
  height: 3rem;
  text-align: center;
  font-size: 2rem;
`;

const Input = ({ search, setSearch, searchedContent }) => {
  const onSearch = (event) => {
    setSearch(event.target.value);
    searchedContent(event.target.value);
  };

  return (
    <Component
      value={search}
      onChange={(event) => onSearch(event)}
      placeholder={"search names..."}
    ></Component>
  );
};

export default Input;
