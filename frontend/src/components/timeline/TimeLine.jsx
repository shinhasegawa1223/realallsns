import React, { useState, useEffect } from "react";
import "./TimeLine.css";
import Share from "../share/Share";
import Post from "../post/Post";
//import { Posts } from "../../dammyData";
import axios from "axios";

export default function TimeLine() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        "/posts/timeline/64b34fe8bab38013516981a5"
      );
      console.log(response);
    };
    fetchPosts();
  }, []);

  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        {
          //Posts.map((post) => (
          // <Post post={post} key={post.id} />
          //))
        }
      </div>
    </div>
  );
}
