import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add new post</button>
      </div>
      <div>New post</div>
      <Post text="блалала" />
      <Post text="Я балван" />
      <Post text="и рыбку съел и везде преуспел" />
      <Post text="Хахаха" />
      <Post text="че" />
    </div>
  );
};

export default MyPosts;
