import { Row, Col, Card, Button } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProductPageContainer = styled.div`
  padding: 40px;
  text-align: center;
  background-color: #f9f9f9;
`;

const ProductTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
`;

const ProductSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
  color: #777;
`;

const ProductGrid = styled(Row)`
  margin-top: 20px;
`;

const ProductCard = styled(Card)`
  margin: 15px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;

  .ant-card-cover img {
    border-radius: 8px 8px 0 0;
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

const ProductButton = styled(Button)`
  margin-top: 15px;
`;

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Fabrication Tools',
      description: 'Top-notch tools for all your fabrication needs.',
      image: 'https://via.placeholder.com/300x200',
      link: '/fabrication',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Innovative solutions for modern challenges.',
      image: 'https://via.placeholder.com/300x200',
      link: '/products/product2',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'High-quality, dependable, and affordable.',
      image: 'https://via.placeholder.com/300x200',
      link: '/products/product3',
    },
  ];

  return (
    <ProductPageContainer>
      <ProductTitle>Our Products</ProductTitle>
      <ProductSubtitle>
        Explore our range of products designed to meet your unique needs.
      </ProductSubtitle>

      <ProductGrid gutter={[16, 16]} justify="center">
        {products.map((product) => (
          <Col xs={24} sm={12} md={8} key={product.id}>
            <ProductCard
              cover={<img src={product.image} alt={product.name} />}
            >
              <Card.Meta title={product.name} description={product.description} />
              <ProductButton type="primary">
                <Link to={product.link}>Learn More</Link>
              </ProductButton>
            </ProductCard>
          </Col>
        ))}
      </ProductGrid>
    </ProductPageContainer>
  );
};

export default Products;
