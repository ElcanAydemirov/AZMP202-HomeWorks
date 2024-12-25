import React from 'react'
import styles from './index.module.scss'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import codeacademy from '../../../../assets/images/logo-footerr.png'

const Footer = () => {
    return (
        <>
        <footer id={styles.footer}>
        <Container>
          <Row className={styles.footerContent}>
            <Col sm={12} md={6}>
              <h2 className={styles.footerHeading}>Contact Me</h2>
              <p className={styles.footerText}>
                Feel free to reach out via email at <a href="mailto:eljan@example.com">eljan@example.com</a>.
              </p>
            </Col>
            <Col sm={12} md={6} className={styles.footerLogo}>
              <img src={codeacademy} alt="Logo" className={styles.footerImage} />
            </Col>
          </Row>
        </Container>
      </footer>
      </>
    )
}

export default Footer