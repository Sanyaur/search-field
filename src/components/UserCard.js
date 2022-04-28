import React from "react";
import styled from "styled-components";

const Card = styled.div``;

const UserCard = ({ user: { id, avatar, email, first_name, last_name } }) => {
  return (
    <>
      <Card style={{ marginBottom: "1rem" }} key={id}>
        <div>
          <img src={avatar} alt='' />
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
