import React from "react";
import styled from "styled-components";
import "../Asset/styles.css";

function Search() {
  return (
    <SearchWrapper id="page-top">
      <Title>운동하고 싶은 사람 AMOONA 모여라</Title>
      <Tagline>TRY EVERY THING WITH YOUR TEAM</Tagline>

      <Buttonhr
        className="btn btn-primary btn-xl text-uppercase"
        onClick={() => (window.location.href = "#services")}
      >
        Tell Me More
      </Buttonhr>
    </SearchWrapper>
  );
}

export default Search;

const SearchWrapper = styled.div`
  background: linear-gradient(
    to top,
    rgba(44, 57, 75, 0.8),
    rgba(44, 57, 75, 0.6),
    rgba(44, 57, 75, 0.4),
    rgba(44, 57, 75, 0.2),
    rgba(44, 57, 75, 0)
  );
  width: 100vw;
  height: 80vh;
  padding: 30px 30px;
  padding: 100px;
  @media (max-width: 768px) {
    padding: 50px;
  }
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  color: white;
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin: 2rem 0rem;
`;

const Tagline = styled.div`
  font-size: 2.5rem;
  margin: 2rem 0rem;
  font-weight: medium;
`;

const Buttonhr = styled.button`
  border-radius: 25px;
  background-color: #475262;
  font-size: 1.5rem;

  color: white;
  border: none;
  box-shadow: 0px 5px 10px #333333;
  &:hover {
    background-color: #5b6a7d;
    cursor: pointer;
  }
  width: 240px;
  height: 25px;

  @media screen and (min-width: 768px) {
    /* 태블릿 크기 이상일 때 */
    width: 270px;
    height: 35px;
  }

  @media screen and (min-width: 1024px) {
    /* 작은 데스크탑 크기 이상일 때 */
    width: 300px;
    height: 45px;
  }

  @media screen and (min-width: 1440px) {
    /* 큰 데스크탑 크기 이상일 때 */
    width: 330px;
    height: 55px;
  }
`;
