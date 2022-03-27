import NameInput from "../Components/NameInput";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  let navigate = useNavigate();

  function handleNewUser(user) {
    localStorage.setItem("userName", user);
    navigate("/quotes");
  }

  return (
    <>
      <Title>Willkommen zu deiner Glücksnuss.</Title>
      <NameInput onSubmit={handleNewUser}></NameInput>
    </>
  );
}

const Title = styled.h1`
  font-family: "Special Elite", cursive;
  margin: 30px;
  text-align: center;
`;
