import { BrowserRouter, Routes, Route } from "react-router-dom";
// import exo from "../src/Asset/fonts/exo.css";
import MainPage from "./Pages/MainPage";
import Mypage from "./Pages/Mypage";
import Postup from "./Pages/Postup";
import PostDetail from "./Component/PostDetail";
import Timedata from "./Component/time_data";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Header from "./Component/Header";
import Footer from "./Component/Footer";

import EditProfile from "./Pages/EditProfile";

import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;

    font-size: 10px;

  
    @media screen and (min-width: 768px) {
      /* 태블릿 크기 이상일 때 */
      font-size: 12px;
    }
  
    @media screen and (min-width: 1024px) {
      /* 작은 데스크탑 크기 이상일 때 */
      font-size: 15px;
    }
  
    @media screen and (min-width: 1440px) {
      /* 큰 데스크탑 크기 이상일 때 */
      font-size: 20px;
      
    }
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/login/" element={<Login />}></Route>
          <Route path="/signup/" element={<Signup />}></Route>
          <Route path="/mypage/" element={<Mypage />}></Route>
          <Route path="/mypage/editprofile" element={<EditProfile />}></Route>
          <Route path="/post-detail/" element={<PostDetail />}></Route>
          <Route path="/post-up/" element={<Postup />}></Route>
          <Route path="/mypage" element={<Mypage />}></Route>
          <Route path="/mypage/editprofile" element={<EditProfile />}></Route>
          <Route path="/post-detail" element={<PostDetail />}></Route>
          <Route path="/Timedata" element={<Timedata />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
