import React from "react";
import styled from "styled-components";

const Card = styled.div`
  padding: 0.5rem;
  text-align: center;
  border: solid white 1px;
  margin: 0.3rem;
  border-radius: 0.7rem;
  color: rgb(54, 54, 54);
  background: white;
  flex-basis: 20%;
  & div {
    margin: 0.5rem 0;
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
`;

const UserCard = ({ user: { id, avatar, email, first_name, last_name } }) => {
  return (
    <>
      <Card style={{ marginBottom: "1rem" }} key={id}>
        <div>
          <Avatar src={avatar} alt={first_name} />
        </div>
        <div>{email}</div>
        <div>
          {first_name} {last_name}
        </div>
      </Card>
    </>
  );
};

export default UserCard;
