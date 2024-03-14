import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/post-api/posts?visibility=public&page=${currentPage}`);
        setPosts(response.data.payload.posts);
        setTotalPages(response.data.payload.totalPages);
        console.log(response)
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Posts</h1>
      <ul className="list-group">
        {posts.map(post => (
          <li key={post._id} className="list-group-item">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>Category: {post.category}</p>
            
          </li>
        ))}
      </ul>
      {/* Pagination */}
      <nav className="mt-4">
        <ul className="pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
            <li key={pageNumber} className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}>
              <button className="page-link" onClick={() => handlePageChange(pageNumber)}>{pageNumber}</button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Posts;
