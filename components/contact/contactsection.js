import React from "react";
import Map from "./map";
import ContactInfo from "./contactInfo";
import ContactForm from "./contactform";
import { Row, Col } from "antd";
import styles from "../../styles/Contact.module.css";
const ContactSection = () => {
  return (
    <>
      <Row justify="center" align="middle" className={styles.contactSection}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} className={styles.infoCol}>
          <ContactInfo />
          <ContactForm />
        </Col>

        <Col className={styles.mapCol} xs={24} sm={24} md={24} lg={8} xl={8}></Col>
      </Row>

      <Row justify="center" align="middle">
        <Col className={styles.mapCol} xs={24} sm={24} md={24} lg={24} xl={24}>
          {" "}
          <Map />
        </Col>
      </Row>
    </>
  );
};

export default ContactSection;
