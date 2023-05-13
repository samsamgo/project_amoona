import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
import logo from "../Asset/2.png";
// import Menu from "./Menu";
// import LoginButton from "./LoginButton";
// import SignupButton from "./SignupButton";
// import { useLocation } from "react-router-dom";
// import { useEffect } from "react";

// const Headerdiv = styled.div`
//   position: fixed;
//   width: 100%;
//   height: 60px;
//   display: flex;
//   background-color: rgba(255, 255, 255, 0.9);
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-between;
//   padding: 0 40px;
//   div2 {
//     align-items: center;
//     display: flex;
//     flex-direction: row;
//     margin-right: 20px;
//     img {
//       width: auto;
//       height: 30px;
//     }
//     span {
//       font-weight: bold;
//       margin-right: auto;
//     }
//   }
//   logindiv {
//     display: flex;
//     flex-direction: row;
//     i {
//       margin: 3px 3px 0px 40px;
//       color: black;
//     }
//   }
//   .LoginChange {
//     margin-left: 1250px;
//   }
//   .Menu {
//   }
// `;

// const auth = window.localStorage.getItem("Authorization");

// function Header() {
//   const location = useLocation();
//   const [pathname, setPathname] = useState("/");

//   useEffect(() => {
//     setPathname(location.pathname);
//   }, [location.pathname]);

//   function Logout() {
//     window.localStorage.removeItem("Authorization");
//     window.location.replace("/");
//   }

//   return (
//     <>
//       <Headerdiv>
//         <div2>
//           <Link to="/">
//             <img src={logo} alt="logo_img" />
//           </Link>
//           <span>AMOONA</span>
//         </div2>

//         <logindiv>
//           {auth && JSON.parse(auth).jwtToken ? (
//             <>
//               <Link to="/mypage/">
//                 <i class="fa-solid fa-user"></i>
//               </Link>
//               <i
//                 className="fa-solid fa-right-from-bracket"
//                 onClick={Logout}
//               ></i>
//             </>
//           ) : (
//             <>
//               <Link to="/Login/">
//                 <i className="fa-solid fa-right-to-bracket"></i>
//               </Link>
//               Login
//             </>
//           )}
//         </logindiv>
//       </Headerdiv>
//     </>
//   );
// }

// export default Header;

import styled from "styled-components";
import "../Asset/styles.css";
import "../Asset/styles.css";
import { useEffect } from "react";
import navbarScript from "./navbarScript";

const Nav = styled.nav`
  background-color: #000;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

const Navbar = () => {
  useEffect(() => {
    navbarScript();
  }, []);

  return (
    <Nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <div
          className="navbar-brand"
          onClick={() => (window.location.href = "#page-top")}
        >
          <img src="assets/img/navbar-logo.svg" alt="..." />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars ms-1"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Map">
                Map
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Team">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
