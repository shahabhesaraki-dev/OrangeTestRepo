import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Weather = () => {
  const navigate = useNavigate();
  const [country, setCountry] = useState("");
  const [details, setDetails] = useState("");
  const [cels, setCels] = useState(true);
  const weather = useSelector((state) => state.weatherData);

  const Keys = Object.keys(weather);

  const checkHandler = () => {
    Keys.forEach((item) => {
      if (country.replace(/^./, country[0].toUpperCase()) === item) {
        setDetails(weather[`${item}`]);
        localStorage.setItem("Details", JSON.stringify(weather[`${item}`]));
        localStorage.setItem("CityName", item);
      }
    });
  };

  const storageDetail = JSON.parse(localStorage.getItem("Details"));
  const storageName = localStorage.getItem("CityName");

  return (
    <Section>
      <Wrapper>
        <Title>CHECK WEATHER</Title>
        <Input
          placeholder="City..."
          type="text"
          value={"" || country}
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />
        <Button onClick={checkHandler}>Check Weather</Button>
        <CountryName>{country || storageName ? storageName : null}</CountryName>
        {details.temperature || storageDetail ? (
          <AnswerBox>
            {cels ? (
              <Answer>
                Temperature:{" "}
                {details.temperature || storageDetail
                  ? storageDetail.temperature
                  : null}
                °C
              </Answer>
            ) : (
              <Answer>
                Temperature:{" "}
                {details.temperature * 1.8 + 32 || storageDetail
                  ? storageDetail.temperature * 1.8 + 32
                  : null}
                °F
              </Answer>
            )}
            <Answer>
              Humidity:{" "}
              {details.humidity || storageDetail
                ? storageDetail.humidity
                : null}
            </Answer>
            <Answer>
              WindSpeed:{" "}
              {details.windSpeed || storageDetail
                ? storageDetail.windSpeed
                : null}
            </Answer>
          </AnswerBox>
        ) : null}
        {details.temperature || storageDetail ? (
          <FlexDiv>
            <Celsius
              onClick={() => {
                setCels(true);
              }}
            >
              °C
            </Celsius>
            <Fahrenheit
              onClick={() => {
                setCels(false);
              }}
            >
              °F
            </Fahrenheit>
          </FlexDiv>
        ) : null}

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
  height: 80%;
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

const Title = styled.h1`
  color: Black;
  font-size: 40px;
  font-family: "Abel";
`;

const Button = styled.button`
  width: 30%;
  height: 35px;
  border-radius: 10px;
  border: none;
  background-color: blueviolet;
  margin-top: 5px;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
  font-family: "Acme";
`;

const CountryName = styled.h2`
  font-family: "Acme";
  color: black;
  margin-bottom: 0;
  margin-top: 50px;
`;

const AnswerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  min-height: 100px;
  background-color: #9a05bf;
  border-radius: 30px;
  border: 2px solid black;
`;

const Answer = styled.h2`
  color: white;
  font-size: 20px;
  font-family: "Abel";
  margin: 0;
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin: 0;
  width: 50%;
`;

const Celsius = styled.button`
  width: 10%;
  height: 25px;
  border-radius: 50%;
  border: 2px solid black;
  background-color: pink;
  color: black;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
  font-family: "Acme";
`;

const Fahrenheit = styled.button`
  width: 10%;
  height: 25px;
  border-radius: 50%;
  border: 2px solid black;
  background-color: pink;
  color: black;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
  font-family: "Acme";
`;

const BackButton = styled.button`
  width: 20%;
  height: 35px;
  border-radius: 10px;
  border: 2px solid black;
  background-color: pink;
  color: black;
  margin-top: 60px;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
  font-family: "Acme";
`;

export default Weather;
