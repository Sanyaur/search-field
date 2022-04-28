import React from "react";
import styled from "styled-components";

const UserCard = ({ user: { id, avatar, email, first_name, last_name } }) => {
  return (
    <>
      <Card key={id}>
        <div>
          <Avatar src={avatar} alt={first_name} />
        </div>
        <div>✉ {email}</div>
        <Name>
          {first_name} {last_name}
        </Name>
      </Card>
    </>
  );
};

const Card = styled.div`
  width: 230px;
  margin: 4rem 0.3rem !important;
  padding: 0.5rem;
  text-align: center;
  border: solid white 1px;
  border-radius: 0.7rem;
  color: rgb(54, 54, 54);
  background: white;

  & div {
    margin: 0.5rem 0;
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 128px;
  height: 128px;
  margin-top: -5rem;
`;

const Name = styled.div`
  font-size: 1.5rem;
  font-weight: bolder;
`;

export default UserCard;
