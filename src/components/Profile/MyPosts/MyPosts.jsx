import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let textareaRef = React.createRef();
  return (
    <div>
      <h3>My posts</h3>
      <div>
        <textarea
          ref={textareaRef}
          placeholder="Anything new?"
          value={props.newPostText}
          onChange={() => props.changeNewPostText(textareaRef.current.value)}
        />
        <div>
          <button onClick={props.addPost}>Add new post</button>
        </div>
      </div>
      {props.posts.map((x) => (
        <Post text={x.text} likesCount={x.likesCount} />
      ))}
    </div>
  );
};

export default MyPosts;
