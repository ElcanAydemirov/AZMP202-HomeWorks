
import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../../components/layouts/client/footer';
import Header from '../../../components/layouts/client/header';

const BlogDetails = () => {
  const { id } = useParams(); 

  return (
    <>  
    <Header/>
      <h1>Blog Details for ID: {id}</h1>
      <Footer/>
    </>
  );
};

export default BlogDetails;
