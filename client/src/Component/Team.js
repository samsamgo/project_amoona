import React, { useState, useEffect } from "react";
import "../Asset/styles.css";
import { useDispatch, useSelector } from "react-redux";
import DummyData from "../Asset/DummyData"; //이름 바꾸기
import styled, { css, keyframes } from "styled-components";

// 스타일된 컴포넌트를 사용하여 포트폴리오 아이템 스타일링
const PortfolioItem = styled.div`
  position: relative;
  overflow: hidden;

  &:hover .portfolio-hover {
    opacity: 1;
  }

  .portfolio-hover {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: ease-in-out 0.3s;
    background-color: rgba(0, 0, 0, 0.6);

    .portfolio-hover-content {
      position: absolute;
      top: 50%;
      width: 100%;
      transform: translateY(-50%);
      text-align: center;

      i {
        margin-top: -12px;
      }
    }
  }

  img {
    width: 100%;
    height: auto;
    transition: ease-in-out 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }

  .portfolio-caption {
    padding: 1rem;
    text-align: center;

    .portfolio-caption-heading {
      font-size: 1.5rem;
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 0.5rem;
    }

    .portfolio-caption-subheading {
      font-size: 0.9rem;
      font-style: italic;
    }
  }
`;

// 포트폴리오 섹션을 위한 컴포넌트
function PortfolioSection() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const [expanded, setExpanded] = useState([]);
  const [data1, setdata1] = useState([]);
  const handleClick = (nodeId) => {
    setExpanded((prevExpanded) => {
      if (prevExpanded.includes(nodeId)) {
        return prevExpanded.filter((id) => id !== nodeId);
      } else {
        return [...prevExpanded, nodeId];
      }
    });
  };

  function displayString(data) {
    if (data === 1) return "내 주변";
    if (data === 3) return "50M";
    if (data === 4) return "100M";
    if (data === 5) return "250M";
    if (data === 6) return "500M";
    if (data === 7) return "1KM";
  }

  const ZoomClick = (nodeId) => {
    dispatch({ type: "SET_NUMBER", maplevel: nodeId });

    useEffect(() => {
      console.log(DummyData);
      const promise = DummyData;
      const getData = () => {
        promise.then((dummyData) => {
          setdata1(dummyData);
          console.log(data1);
        });
      };
      getData();
    }, []);

    const handleSearch = (searchValue) => {
      if (searchValue === "축구") {
        setdata1(data1.filter((item) => item.event === "축구"));
      } else if (searchValue === "농구") {
        setdata1(data1.filter((item) => item.event === "농구"));
      } else if (searchValue === "탁구") {
        setdata1(data1.filter((item) => item.event === "탁구"));
      } else if (searchValue === "배구") {
        setdata1(data1.filter((item) => item.event === "배구"));
      } else if (searchValue === "헬스") {
        setdata1(data1.filter((item) => item.event === "헬스"));
      } else if (searchValue === "기타") {
        setdata1(data1.filter((item) => item.event === "기타"));
      } else {
        window.location.replace("/");
      }
    };
  };
  return (
    <section className="page-section bg-light" id="Team">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Team</h2>
          <h3 className="section-subheading text-muted">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
          <Setlocdiv>
            <Setlocsection onClick={() => handleClick("내 주변(500m)")}>
              <div>
                <span>
                  {displayString(data.maplevel)}
                  {expanded.includes("내 주변(500m)") ? (
                    <RotatedIcon
                      className="fa-sharp fa-solid fa-caret-down fa-2x"
                      rotateZ={180}
                      paddingBottom="10px"
                    ></RotatedIcon>
                  ) : (
                    <RotatedIcon
                      className="fa-sharp fa-solid fa-caret-down fa-2x"
                      rotateZ={0}
                    ></RotatedIcon>
                  )}
                </span>
              </div>

              {expanded.includes("내 주변(500m)") && (
                <ul>
                  <NavBar expanded1>
                    <div1 onClick={() => ZoomClick(1)}>내 주변</div1>
                    <div1 onClick={() => ZoomClick(3)}>50m</div1>
                    <div1 onClick={() => ZoomClick(4)}>100m</div1>
                    <div1 onClick={() => ZoomClick(5)}>250m</div1>
                    <div1 onClick={() => ZoomClick(6)}>500m</div1>
                    <div1 onClick={() => ZoomClick(7)}>1Km</div1>
                  </NavBar>
                </ul>
              )}
            </Setlocsection>
          </Setlocdiv>
        </div>

        <div className="row">
          <div className="col-lg-4 col-sm-6 mb-4">
            {/* 포트폴리오 아이템 */}

            {data1 &&
              data1.map((id) => {
                return (
                  <PortfolioItem key={id}>
                    <a
                      className="portfolio-link"
                      data-bs-toggle="modal"
                      href={`#portfolioModal${id}`}
                    >
                      <div className="portfolio-hover">
                        <div className="portfolio-hover-content">
                          <i className="fas fa-plus fa-3x"></i>
                        </div>
                      </div>
                      <img
                        className="img-fluid"
                        src={`assets/img/portfolio/${id}.jpg`}
                        alt="..."
                      />
                    </a>
                    <div className="portfolio-caption">
                      <div className="portfolio-caption-heading">Threads</div>
                      <div className="portfolio-caption-subheading text-muted">
                        Illustration
                      </div>
                    </div>
                  </PortfolioItem>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;

const Setlocdiv = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: row;
  padding: 100px 100px 0px 40px;
  justify-content: space-between;
  div {
    font-size: 32px;
    font-weight: bold;
    margin: 25px 0px 25px 50px;
  }
`;

const Setlocsection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  div {
    display: flex;
    flex-direction: row;
    span {
      font-size: 20px;
      text-decoration: underline;
      text-decoration-thickness: 5px;
    }
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(-10%);
  }
`;
const NavBar = styled.nav`
  overflow: hidden;
  transform: translateY(-100%);
  transition: all 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.expanded1 &&
    css`
      animation: ${slideDown} 0.5s ease-in-out;
      transform: translateY(-10%);
    `}

  div1 {
    width: 120px;
    font-size: 20px;
    line-height: 30px;
    &:hover {
      background-color: rgba(44, 57, 75, 0.4);
    }
  }
`;

const RotatedIcon = styled.i`
  transform: rotateZ(${(props) => props.rotateZ || 0}deg);
  padding-bottom: ${(props) => props.paddingBottom || "0px"};
  margin: 0px 0px 0px 20px;
`;
