import React, { useState, useEffect, useContext } from "react";
import { Card, Row, Col, Typography, Space, Rate, Button } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { getAllData } from "../../services/helpers";
import { endpoints } from "../../services/constants";
import { FavoritesContext } from "../../context/FavContext/FavContext";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";

const Products = () => {
  const { Title } = Typography;
  const [items, setItems] = useState([]);
  const { fav: favorites, toggleFavorites: updateFavorites } = useContext(FavoritesContext);
  const { them: currentTheme, toggleTheme: switchTheme } = useContext(ThemeContext);

  const getProducts = async () => {
    const response = await getAllData(endpoints.products);
    setItems(response);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const renderProducts = () => {
    return items.map((item) => (
      <Col xs={24} sm={12} md={8} lg={6} key={item.id}>
        <Card
          hoverable
          cover={<img alt={item.title} src={item.image} style={{ width: "100%", height: "400px", objectFit: "contain" }} />}
          style={{
            width: "100%",
            maxWidth: "350px",
            borderRadius: "8px",
            margin: "0 auto",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease",
            backgroundColor: currentTheme === "light" ? "white" : "white",
            color: currentTheme === "light" ? "black" : "white",
          }}
        >
          {favorites?.some((favItem) => favItem.id === item.id) ? (
            <HeartFilled onClick={() => updateFavorites(item)} style={{ color: "red" }} />
          ) : (
            <HeartOutlined onClick={() => updateFavorites(item)} />
          )}
          <Title level={4}>{item.title}</Title>
          <Space direction="vertical" size={6}>
            <p>{item.description.length > 80 ? `${item.description.substring(0, 80)}...` : item.description}</p>
            <p><strong>${item.price}</strong></p>
            <Rate disabled value={item.rating.rate} />
            <p>{item.rating.count} reviews</p>
          </Space>
        </Card>
      </Col>
    ));
  };

  return (
    <div className="container">
      <div style={{ marginTop: "50px" }}>
        <Button onClick={switchTheme}>
          {currentTheme === "light" ? "Dark Mode" : "Light Mode"}
        </Button>
        <Row gutter={[16, 24]} justify="center">
          {items.length > 0 && renderProducts()}
        </Row>
      </div>
    </div>
  );
};

export default Products;