import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './index.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import photo from '../../../assets/images/istockphoto-520860375-612x612-removebg-preview.png'
import codeacademy from '../../../assets/images/logo-footerr.png'
import Header from '../../../components/layouts/client/header';
import Footer from '../../../components/layouts/client/footer';

const Home = () => {
  return (
    <>
    <Header/>
    <section id={styles.banner}>
    <Container>
      <Row className={styles.banner}>
        <Col xl={8}  md={8} xs={12} className=''>
        <h1 className={styles.h1}>Hi I Am </h1>  
        <h1 className={styles.h1}> Eljan Aydamirov</h1>
        
        <p className={styles.p}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat tempora iure perferendis nihil necessitatibus id voluptate reprehenderit ea nam nemo provident velit aspernatur iusto, dolor aut harum, dolore hic laborum!</p>
        <button className={styles.btn}>About Me</button>
        </Col>
        <Col  xl={4}  md={8} xs={12}><img src={photo} alt="" className={styles.img}/></Col>
      </Row>
    </Container>
    </section>
    <section id={styles.education}>
        <Container>
            <h1 className={styles.heading}>Education</h1>
            <Row className={styles.educationRow}>
                <Col xl = {8}>
                <div className={styles.texts}>
                        <h1 className={styles.h1}>Frontend Developer</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolore natus? Pariatur totam quis officia consectetur? Exercitationem ipsum voluptate ut cum aperiam soluta, corporis earum iure veritatis laudantium ducimus ea!</p>
                    </div>   
                    </Col>
                <Col xl = {4}>
                    <div className="image">
                        <img src={codeacademy} alt="" />
                        </div>        
                        </Col>
            </Row>
        </Container>
    </section>
    <Footer/>
    </>
  );
};

export default Home;
