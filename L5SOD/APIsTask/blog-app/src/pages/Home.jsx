import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("https://blog-app-b961.onrender.com/api/posts/");
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <h2>Latest Posts</h2>
      <div className="posts">
        {data.length > 0 ? (
          data.map((post) => (
            <div key={post._id} className="post-card">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </div>
          ))
        ) : (
          <p>Loading posts...</p>
        )}
      </div>
    </>
  );
};

export default Home;
