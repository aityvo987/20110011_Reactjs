const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const port = 5000;


app.use(bodyParser.json());
app.use(cors());
let blogs = [];
let comments = [];
const initialBlogs = [
    { id: '1', title: 'First Blog', content: 'This is the content of the first blog.' },
    { id: '2', title: 'Second Blog', content: 'This is the content of the second blog.' },
    { id: '3', title: 'Third Blog', content: 'This is the content of the third blog.' }
  ];

blogs = initialBlogs;
const initialComments = [
    { id: '1', blogId: '1', content: 'This is the first comment on the first blog.' },
    { id: '2', blogId: '1', content: 'This is the second comment on the first blog.' },
    { id: '3', blogId: '2', content: 'This is the first comment on the second blog.' }
  ];
  
  // Initialize comments with initial data
  comments = initialComments;
  app.post('/blogs', (req, res) => {
    const { title, content } = req.body;
    const newBlog = { id: generateId(), title, content };
    blogs.push(newBlog);
    res.send(newBlog);
  });
  
  // Endpoint for retrieving a specific blog
  app.get('/blogs/:id', (req, res) => {
    const blogId = req.params.id;
    const foundBlog = blogs.find(blog => blog.id === blogId);
    const blogComments = comments.filter(comment => comment.blogId === blogId);
    const blogWithComments = { ...foundBlog, comments: blogComments };
    res.send(blogWithComments);
  });
  
  // Endpoint for updating a specific blog
  app.put('/blogs/:id', (req, res) => {
    const blogId = req.params.id;
    const updatedBlog = req.body;
    blogs = blogs.map(blog => (blog.id === blogId ? { ...blog, ...updatedBlog } : blog));
    res.send(updatedBlog);
  });
  
  // Endpoint for deleting a specific blog
  app.delete('/blogs/:id', (req, res) => {
    const blogId = req.params.id;
    blogs = blogs.filter(blog => blog.id !== blogId);
    res.send(`Deleted blog with ID: ${blogId}`);
  });
  
  // Endpoint for creating a new comment
  app.post('/comments', (req, res) => {
    const { blogId, content } = req.body;
    const newComment = { id: generateId(), blogId, content };
    comments.push(newComment);
    res.send(newComment);
  });
  
  // Endpoint for updating a specific comment
  app.put('/comments/:id', (req, res) => {
    const commentId = req.params.id;
    const updatedComment = req.body;
    comments = comments.map(comment => (comment.id === commentId ? { ...comment, ...updatedComment } : comment));
    res.send(updatedComment);
  });
  
  // Endpoint for deleting a specific comment
  app.delete('/comments/:id', (req, res) => {
    const commentId = req.params.id;
    comments = comments.filter(comment => comment.id !== commentId);
    res.send(`Deleted comment with ID: ${commentId}`);
  });
  
  // Endpoint for viewing all blogs
  app.get('/blogs', (req, res) => {
    const blogsWithComments = blogs.map(blog => {
      const blogComments = comments.filter(comment => comment.blogId === blog.id);
      return { ...blog, comments: blogComments };
    });
    res.send(blogsWithComments);
  });
  
app.listen(port, () => {
  console.log(`API server is running on http://localhost:${port}`);
});

// Helper function to generate a unique ID
let idCounter = 3;

function generateId() {
  return idCounter++;
}