// /pages/client/contact/index.jsx
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import styles from './index.module.scss';

const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <Container>
        <Row className="justify-content-center">
          <Col md={8} xs={12}>
            <h1 className={styles.title}>Contact Me</h1>
            <p className={styles.description}>
              Have any questions or want to reach out? Feel free to send me a message.
            </p>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Write your message" />
              </Form.Group>

              <Button variant="primary" type="submit" className={styles.submitBtn}>
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
