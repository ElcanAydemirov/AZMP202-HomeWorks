import React from 'react';
import { NavLink } from 'react-router-dom';

const Blog = () => {
  const blogs = [
    { id: 1, title: 'Blog 1' },
    { id: 2, title: 'Blog 2' },
    { id: 3, title: 'Blog 3' }
  ];

  return (
    <>
      <h1>Blog</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <NavLink to={`/blog/${blog.id}`}>{blog.title}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Blog;
