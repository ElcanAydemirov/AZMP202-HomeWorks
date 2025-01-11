/* eslint-disable react/jsx-key */
import { useState, useEffect, useContext } from "react";
import { Card, Row, Col, Typography, Space, Rate, Button } from "antd";
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { getAllData } from '../../services/helpers';
import { endpoints } from "../../services/constants";
import { FavoritesContext } from "../../context/FavContext/FavContext";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";


const Products = () => {
  const { Title } = Typography;
  const [products, setProducts] = useState([])
  const { fav, toggleFavorites } = useContext(FavoritesContext)
  const { them, toggleTheme } = useContext(ThemeContext)

  const getAllProducts = async () => {
    const data = await getAllData(endpoints.products)
    setProducts(data)
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <>
      <div className="container">
        <div style={{ marginTop: '50px' }}>
          <Button onClick={() => toggleTheme()}>{them === "light" ? "dark mode" : "light mode"}</Button>
          <Row gutter={[16, 24]} justify="center">
            {products.length > 0 && products.map((product) => (
              <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
                <Card
                  hoverable
                  cover={<img alt={product.title} src={product.image} style={{ width: '100%', height: '400px', objectFit: "contain" }} />}
                  style={{
                    width: '100%',
                    maxWidth: '350px',
                    borderRadius: '8px',
                    margin: '0 auto',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s ease',
                    backgroundColor: them === "light" ? "white" : "white",
                    color: them === "light" ? "black" : "white"
                  }}
                >
                  {fav && fav.find((item) => item.id === product.id)
                    ? <HeartFilled onClick={() => toggleFavorites(product)} style={{ color: 'red' ,fontSize:"1.3rem"}} />
                    : <HeartOutlined onClick={() => toggleFavorites(product)} style={{ color: 'black' , fontSize:"1.3rem"}}/>}
                  <Title level={4}>{product.title}</Title>
                  <Space direction="vertical" size={6}>
                    <p style={{color:"black"}}>{product.description.length > 80 ? `${product.description.slice(0, 80)}...` : product.description}</p>
                    <p style={{color:"black"}}><strong>${product.price}</strong></p>
                    <Rate disabled value={product.rating.rate} />
                    <p>{product.rating.count} reviews</p>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
}

export default Products;
