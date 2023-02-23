// import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Section>
      <Wrapper>
        <AnswerBox
          onClick={() => {
            navigate("/firstQuestion");
          }}
        >
          <Answer>First Question</Answer>
        </AnswerBox>
        <AnswerBox
          onClick={() => {
            navigate("/secondQuestion");
          }}
        >
          <Answer>Second Question</Answer>
        </AnswerBox>
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
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50%;
`;

const AnswerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin-top: 30px;
  min-height: 100px;
  background-color: pink;
  border-radius: 30px;
  border: 2px solid black;
  margin-left: 20px;
  cursor: pointer;
`;

const Answer = styled.h2`
  color: black;
  font-size: 30px;
  font-family: "Abel";
`;

export default Home;
