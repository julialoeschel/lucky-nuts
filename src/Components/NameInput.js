import styled from "styled-components";
import Button from "./Button";

export default function NameInput({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const inputElement = form.elements.name;
    onSubmit(inputElement.value);
    form.reset();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="name">sag mir deinen Namen</label>
      <input type="text" name="username" id="name" />
      <Button>fertig!</Button>
    </Form>
  );
}

const Form = styled.form`
  display: grid;
  margin: 100px 30px;
  gap: 20px;

  Button {
    justify-self: start;
  }
`;
