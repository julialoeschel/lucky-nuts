import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import RoundButton from "../Components/RoundButton";

export default function Login() {
  let navigate = useNavigate();

  function handleBackClick(event) {
    event.preventDefault();
    navigate("/quotes");
  }

  return (
    <>
      <Form>
        <RoundButton onClick={handleBackClick}>✗</RoundButton>
        <h2>Login</h2>
        <label htmlFor="username">
          Username
          <input type="text" id="username" name="name" />
        </label>
        <label htmlFor="passwprd">
          Password
          <input type="text" id="password" name="password" />
        </label>
        <Button>log me in!</Button>
      </Form>
    </>
  );
}

const Form = styled.form`
  display: grid;
  grid-template-rows: 100px 1fr 1fr 1fr;
  padding: 100px 20px;
  gap: 20px;
  font-family: "Special Elite", cursive;

  Button {
    margin-top: 30px;
  }

  label {
    align-item: end;
    align-self: center;
  }

  input {
    display: block;
    width: 80%;
    height: 25px;
    margin: 5px 0;
  }
`;
