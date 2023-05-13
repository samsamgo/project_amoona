import React, { useState, useEffect, useRef } from "react";
import "animate.css/animate.min.css";
import styled from "styled-components";
import Search from "../Component/Search";
import Services from "../Component/sevice";
import Team from "../Component/Team";
import Map from "../Component/Mapboard";
import PostDetail from "../Component/PostDetail";

function MainPage() {
  const [username, setUsername] = useState("");
  const mapRef = useRef(null);

  const [postdeisOpen, setpostdedeisOpen] = useState(false);
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [isReqVisible, setIsReqVisible] = useState(false);

  /*scroll시 애니메이션 색깔 바뀌는 효과*/
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.pageYOffset);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 1100) {
      setIsReqVisible(true);
    } else {
      setIsReqVisible(false);
    }
    if (scrollPosition > 400 && scrollPosition <= 1900) {
      setIsMapVisible(true);
    } else {
      setIsMapVisible(false);
    }
  }, [scrollPosition]);
  /**/

  const change = (e) => {
    let { value } = { ...e.target };
    setUsername(value);
  };

  function openpostdeModal() {
    setpostdedeisOpen(!postdeisOpen);
  }

  return (
    <>
      {postdeisOpen && (
        <ModalBackdrop>
          <PostDetail openModal={openpostdeModal} />
        </ModalBackdrop>
      )}
      <Search />
      <Services />
      <Maindiv>
        <Map />
        <Team />
      </Maindiv>
    </>
  );
}

export default MainPage;

const Maindiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0px 0px 100px 0px;
  padding: 0 40px;
`;

const Reqdiv = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  animation: ${({ isReqVisible }) =>
    isReqVisible ? "fadeInLeft 2s" : "fadeOutRight 2s"};
`;

const ModalBackdrop = styled.div`
  // TODO : Modal이 떴을 때의 배경을 깔아주는 CSS를 구현합니다.
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
