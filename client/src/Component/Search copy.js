import React, { useState } from "react";
import Postup from "../Pages/Postup";
import styled from "styled-components";

function Search({ handleSearch }) {
  const [postisOpen, setpostIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  function openpostupModal() {
    setpostIsOpen(!postisOpen);
  }

  return (
    <>
      {postisOpen && (
        <ModalBackdrop>
          <Postup openModal={openpostupModal} />
        </ModalBackdrop>
      )}
      {/* {postdeisOpen && (
        <ModalBackdrop onClick={openpostdeModal}>
          <PostDetail />
        </ModalBackdrop>
      )} */}
      <Serachdiv>
        <div4>
          운동하고 싶은 사람 <strong>AMOONA</strong> 모여라
        </div4>
        <div1>WHAT’S YOUR FAVORITE SPORT?</div1>
        <div>
          <i class="fa-solid fa-magnifying-glass  fa-2x"></i>
          <input
            type="text"
            name="search"
            placeholder="어떤 운동 하세요?"
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyPress={(event) =>
              event.key === "Enter" ? handleSearch(searchValue) : null
            }
          />
        </div>

        <div2>🔥팀을 만들어 보세요!!🔥</div2>
        <button onClick={openpostupModal}>Let’s do It!!!</button>
        <div3>TRY EVERY THING WITH YOUR TEAM</div3>
      </Serachdiv>
    </>
  );
}

export default Search;

const Serachdiv = styled.div`
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
  box-shadow: 0px 4px 0px 0px #d3d3d3; /* 상하좌우, 그림자 크기, 그림자 색상 */
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  color: white;
  div1 {
    font-size: 40px;
    font-weight: bold;
    margin: 60px 0px 0px 0px;
    z-index: 1;
  }
  div2 {
    font-size: 30px;
    font-weight: bold;
    margin: 60px 0px 0px 0px;
    z-index: 1;
  }
  div3 {
    font-size: 30px;
    font-weight: medium;
    margin: 50px 0px 50px 0px;
    z-index: 1;
  }
  div4 {
    font-size: 70px;
    font-weight: bold;
    margin: 150px 0px 0px 0px;
    color: rgba(44, 57, 75, 0.8);
    z-index: 1;
  }
  button {
    z-index: 1;
    border-radius: 25px;
    background-color: #475262;
    width: 330px;
    height: 55px;
    font-size: 25px;
    color: white;
    margin: 30px 0px 0px 0px;
    border: none;
    box-shadow: 0px 5px 10px #333333;
    &:hover {
      background-color: #5b6a7d;
      cursor: pointer;
    }
  }
  div {
    position: relative;
    z-index: 1;
    input {
      width: 640px;
      height: 60px;
      font-size: 25px;
      font-weight: normal;
      border-radius: 30px;
      text-align: center;
      margin-top: 50px;
      text-align: center;
      padding-left: 40px;
    }
    i {
      position: absolute;
      left: 30px;
      top: 73%;
      transform: translateY(-50%);
      color: gray;
      font-size: 20px;
      color: black;
    }
  }
`;

const ModalBackdrop = styled.div`
  // TODO : Modal이 떴을 때의 배경을 깔아주는 CSS를 구현합니다.
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 2;
`;
