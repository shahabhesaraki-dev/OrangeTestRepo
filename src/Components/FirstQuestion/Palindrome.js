import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Palindrome = () => {
  const navigate = useNavigate();
  const [word, setWord] = useState("");
  const [answer, setAnswer] = useState("");

  const checkHandler = () => {
    let reverseWord = word.split("").reverse().join("");
    if (word.length !== 0) {
      if (word === reverseWord) {
        setAnswer("It is a Palindrome");
        setWord("");
      } else {
        setAnswer("It is not a Palindrome");
        setWord("");
      }
    }
  };
  return (
    <Section>
      <Wrapper>
        <Title>PALINDROME</Title>
        <Input
          placeholder="Add your word"
          type="text"
          value={"" || word}
          onChange={(e) => {
            setWord(e.target.value);
          }}
        />
        <Button onClick={checkHandler}>Check</Button>
        <AnswerBox>
          <Answer>{answer}</Answer>
        </AnswerBox>
        <BackButton
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </BackButton>
      </Wrapper>
    </Section>
  );
};

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d2d0cc;
  width: 100%;
  height: 97.5vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 60%;
`;

const Title = styled.h1`
  color: Black;
  font-size: 40px;
  font-family: "Abel";
`;

const Input = styled.input`
  width: 50%;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 10px;
  font-size: 15px;
  padding-left: 10px;
`;

const Button = styled.button`
  width: 30%;
  height: 35px;
  border-radius: 10px;
  border: none;
  background-color: blueviolet;
  color:white;
  margin-top: 5px;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
  font-family: "Acme";
`;

const AnswerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin-top: 30px;
  min-height: 100px;
  background-color: #9a05bf;
  border-radius: 30px;
  border: 2px solid black;
`;

const Answer = styled.h2`
  color: white;
  font-size: 30px;
  font-family: "Abel";
`;

const BackButton = styled.button`
  width: 15%;
  height: 35px;
  border-radius: 10px;
  border: 2px solid black;
  background-color: pink;
  color: black;
  margin-top: 50px;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
  font-family: "Acme";
`;

export default Palindrome;
