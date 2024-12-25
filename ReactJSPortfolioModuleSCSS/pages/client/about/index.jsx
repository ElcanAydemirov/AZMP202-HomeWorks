import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './index.module.scss';
import logo from '../../../assets/images/istockphoto-520860375-612x612-removebg-preview.png';

export const About = () => {
  return (
    <section className={styles.aboutSection}>
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={12} sm={12} className="text-center text-md-start">
            <h1 className={styles.title}>About Me</h1>
            <p className={styles.description}>
              Hello! I'm Eljan Aydamirov, a passionate developer with a love for creating web applications.
              I specialize in front-end development using React and modern web technologies. I'm always eager
              to learn new things and improve my skills.
            </p>
            <button className={styles.learnMoreBtn}>Learn More</button>
          </Col>
          <Col lg={6} md={12} sm={12} className="text-center">
            <img
              src={logo}
              alt="About me"
              className={styles.aboutImage}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
