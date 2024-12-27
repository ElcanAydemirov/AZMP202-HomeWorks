import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../../../components/layouts/client/footer';
import Header from '../../../components/layouts/client/header';
import ProductCard from '../../../components/layouts/client/productcard';
import { controller } from '../../../services/constants';
import { getAllData } from '../../../services/helpers';

const Products = () => {
  const [products, setProducts] = useState([]);

  const allData = async () => {
    try {
      const res = await getAllData(controller.Products);
      console.log(res);
      setProducts(res.data); 
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    allData();
  }, []);

  return (
    <>
      <Header />
      <section id="products">
        <Container>
          <Row>
            
              {products.length > 0 && products.map((p) => (
                <Col xs={3} style={{margin:"1rem 0"}}>
                <ProductCard
                   id={p.id}
                  key={p.id} 
                  title={p.title.slice(0,12)}
                  price={p.price}
                  description={p.description.slice(0,50)}
                  category={p.category}
                  image={p.image}
                />
                </Col>
              ))}
            
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Products;
