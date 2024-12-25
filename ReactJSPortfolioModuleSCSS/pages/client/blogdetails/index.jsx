// /pages/client/blogdetails/index.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams(); // URL-dən id alırıq

  return (
    <>
      <h1>Blog Details for ID: {id}</h1>
      {/* Burada `id`-yə əsasən bloq məlumatlarını çəkə bilərsiniz */}
    </>
  );
};

export default BlogDetails;
