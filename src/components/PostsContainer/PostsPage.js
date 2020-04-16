//Complete the necessary code in this file
// import useState
import { useState } from 'react'
import React from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from '../../dummy-data'
// import data 

const PostsPage = (props) => {
  // set up state for your data
  const [posts, setPosts] = useState(dummyData);
  console.log(dummyData);
  console.log(props);
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {posts.map( (postData, idx) => {
        return <Post key={idx} post={postData} />
      })
      }
    </div>
  );
};

export default PostsPage;
