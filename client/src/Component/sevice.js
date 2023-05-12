import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faUserGroup,
  faFutbol,
  faPlug,
} from "@fortawesome/free-solid-svg-icons";
import "../Asset/styles.css";

const Services = () => {
  return (
    <section className="page-section" id="services">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Services</h2>
          <h3 className="section-subheading text-muted">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <span class="fa-stack fa-4x">
              <FontAwesomeIcon
                icon={faCircle}
                style={{ fontSize: "4rem" }}
                className="text-warning fa-stack-2x"
              />

              <FontAwesomeIcon
                icon={faUserGroup}
                style={{ fontSize: "3rem" }}
                className="fa-stack-1x fa-inverse"
              />
            </span>

            <h4 className="my-3">운동 동반자 찾기</h4>
            <p className="text-muted">
              혼자 운동을 하다보면 지루할 수 있고, 동기 부여가 어려울 때가
              있습니다. 하지만 이 어플을 통해 주변에 함께 운동을 할 사람을 찾을
              수 있기 때문에, 운동을 하면서 동시에 새로운 인연을 만들 수
              있습니다.
            </p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <FontAwesomeIcon
                icon={faCircle}
                style={{ fontSize: "4rem" }}
                className="text-warning fa-stack-2x"
              />

              <FontAwesomeIcon
                icon={faFutbol}
                style={{ fontSize: "3rem" }}
                className="fa-stack-1x fa-inverse"
              />
            </span>
            <h4 className="my-3">다양한 운동을 즐기기</h4>
            <p className="text-muted">
              이 어플을 사용하면 함께 운동을 할 수 있는 상대가 많아지기 때문에,
              보다 다양한 운동 종목을 즐길 수 있습니다. 예를 들어, 혼자서는
              어려웠던 높은 난이도의 운동이나, 새로운 운동을 배울 수 있는 기회도
              생깁니다.
            </p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <FontAwesomeIcon
                icon={faCircle}
                style={{ fontSize: "4rem" }}
                className="text-warning fa-stack-2x "
              />

              <FontAwesomeIcon
                icon={faPlug}
                style={{ fontSize: "3rem" }}
                className="fa-stack-1x fa-inverse"
              />
            </span>
            <h4 className="my-3">운동의 효율성 증대</h4>
            <p className="text-muted">
              운동을 함께 하는 동반자가 있으면 서로의 운동을 관찰하고, 서로를
              격려하면서 운동의 효율성을 증대시킬 수 있습니다. 또한, 다양한
              레벨의 운동을 즐길 수 있기 때문에, 각자의 능력에 맞게 적절한
              운동을 할 수 있어 더욱 효율적인 운동이 가능합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
