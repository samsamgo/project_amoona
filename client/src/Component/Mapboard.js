import React from "react";
import styled from "styled-components";
import Map from "../Component/Map";
import "../Asset/styles.css";

const PortfolioSection = () => {
  return (
    <section className="page-section bg-light" id="Map">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Map</h2>
          <h3 className="section-subheading text-muted">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-6 mb-4">
            <Mapdiv>
              <Map />
            </Mapdiv>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

const Mapdiv = styled.div`
  width: 100%;
  height: 800px;
  margin-top: 50px;
  padding: 0 200px;
  opacity: 0;
  visibility: hidden;
  transition: all 2s;
  // &.fade-in {
  //   opacity: 1;
  //   visibility: visible;
  // }
`;
// const Mapdiv = styled.div`
//   width: 100vw;
//   height: 800px;
//   border-radius: 30px;
//   display: flex;
//   justify-content: center;
//   margin-top: 50px;
//   animation: ${({ isMapVisible }) =>
//     isMapVisible ? "fadeInRight 2s" : "fadeOutLeft 2s"};
// `;
