import styled from "styled-components";
import Button from "../Components/Button";

export default function Login() {
  return (
    <>
      <Form>
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
