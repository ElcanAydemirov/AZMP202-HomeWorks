import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../components/layouts/client/header';
import Footer from '../../../components/layouts/client/footer';

const Blog = () => {
  const blogs = [
    { id: 1, title: 'Blog 1' },
    { id: 2, title: 'Blog 2' },
    { id: 3, title: 'Blog 3' }
  ];

  return (
    <>
        <Header/>


      <h1>Blog</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <NavLink to={`/blog/${blog.id}`}>{blog.title}</NavLink>
          </li>
        ))}
      </ul>
      <Footer/>
    </>
  );
};

export default Blog;
