import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to car rent service</h2>
              <p className="section__description">
                the web-based Vehicle Management System, is to develop a comprehensive online platform aimed at optimizing the management of vehicle rentals. This system comprises three distinct modules: one for Customers, one for Vehicle Owners, and an Admin module.

                  The primary objectives are to streamline the vehicle rental process, enhance the overall user experience, and provide valuable insights into business operations.

                    For Customers, the system simplifies the process of finding, booking, and managing vehicle rentals. It ensures transparency, ease of payment, and facilitates user feedback.

              </p>

              <div className="about__section-item d-flex align-items-center">

              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
