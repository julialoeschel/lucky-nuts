import styled from "styled-components";

export default function Button({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  width: fit-content;
  justify-self: center;
  padding: 10px 20px;
`;
