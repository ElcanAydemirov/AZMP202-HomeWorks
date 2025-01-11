import { useContext } from 'react';
import { FavoritesContext } from '../../context/FavContext/FavContext';
import { Button, Card, Col, Row, Typography, Space } from 'antd';

const Favorites = () => {
  const { fav, clearFavorites, toggleFavorites } = useContext(FavoritesContext);
  const { Title, Text } = Typography;

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        {fav.length > 0 ? (
          <>
            <Button type="primary" danger onClick={clearFavorites} style={{ marginBottom: '20px' }}>
              Clear All Favorites
            </Button>
            <Title level={3}>Your Favorite Items</Title>
          </>
        ) : (
          <Title level={4}>You have no favorites yet!</Title>
        )}
      </div>
      <Row gutter={[16, 16]} justify="center">
        {fav.map((item) => (
          <Col xs={24} sm={12} md={8} lg={6} key={item.id}>
            <Card
              hoverable
              cover={<img alt={item.title} src={item.image} style={{ width: '100%', height: '200px', objectFit: 'contain' }} />}
              style={{
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Space direction="vertical" size="small" style={{ width: '100%' }}>
                <Title level={4} style={{ margin: 0 }}>{item.title}</Title>
                <Text>${item.price}</Text>
                <Button type="link" danger onClick={() => toggleFavorites(item)} style={{ padding: 0 }}>
                  Remove from Favorites
                </Button>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Favorites;