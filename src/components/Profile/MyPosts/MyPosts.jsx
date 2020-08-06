import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import AddPostform from "./AddPostForm/AddPostFormContainer";

const MyPosts = (props) => {
  const { addPost, posts } = props;
  return (
    <div>
      <h3>My posts</h3>
      <AddPostform addPost={addPost} />
      {posts.map((x) => (
        <Post text={x.text} likesCount={x.likesCount} />
      ))}
    </div>
  );
};

export default MyPosts;
