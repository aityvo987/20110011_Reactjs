import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/blogs')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.error('Error fetching blogs:', error);
      });
  }, []);

  return (
    <div>
      <h1>Blog Website</h1>
      <h2>Recent Blogs</h2>
      {blogs.map(blog => (
        <div key={blog.id}>
          <h3>
            <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
          </h3>
          <p>{blog.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;