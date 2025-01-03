import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductCard from '../../../components/layouts/client/productcard';
import { controller } from '../../../services/constants';
import { getDataById } from '../../../services/helpers';

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();  

  const goBack = () => {
    navigate(-1);  
  }

  const getData = async () => {
    try {
      const res = await getDataById(controller.Products, id);
      setProduct(res);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  useEffect(() => {
    console.log(product);
  }, [product]);

  if (product.length === 0) {
    return <h1>Product loading...</h1>;
  }

  return (
    <>
      <ProductCard
        title={product.title}
        image={product.image}
        description={product.description}
        id={product.id}
      />
      <button onClick={goBack}>Go Back</button> 
      <h1>salam</h1>
    </>
  );
};

export default ProductDetails;
