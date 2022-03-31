import styled from "styled-components";

export default function RoundButton({ children, onClick }) {
  return <Button onClick={onClick}>{children}</Button>;
}

const Button = styled.button`
  border: none;
  padding: 10px 15px;
  border-radius: 50%;
  font-size: 30px;
  position: absolute;
  right: 20px;
  top: -20px;
`;
