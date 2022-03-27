import { useState } from "react";
import { data } from "../data";
import nut from "../nut.png";
import Button from "./Button";
import styled from "styled-components";

export default function QuoteNut() {
  const [randomNumber, setRandomNumber] = useState(0);

  function handleClick() {
    const length = data.length;
    const randomNumber = Math.floor(Math.random() * length);
    setRandomNumber(randomNumber);
  }

  return (
    <Container>
      <Img src={nut} alt="nut of wisdom" width={200} />
      <Button onClick={handleClick}>next</Button>
      <Quote>{data[randomNumber].quote}</Quote>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-row: 1fr 1fr 1fr;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
`;

const Img = styled.img`
  justify-self: center;
`;

const Quote = styled.p`
  font-family: "Special Elite", cursive;
  font-size: 25px;
  text-align: center;
  padding: 20px;
`;
