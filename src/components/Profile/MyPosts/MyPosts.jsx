import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  actionCreateChangeNewPostText,
  actionCreateAddPost,
} from "../../../redux/state";

const MyPosts = (props) => {
  let textareaRef = React.createRef();
  return (
    <div>
      <h3>My posts</h3>
      <div>
        <textarea
          ref={textareaRef}
          value={props.newPostText}
          placeholder="Anything new?"
          onChange={() =>
            props.changeNewPostText(
              actionCreateChangeNewPostText(textareaRef.current.value)
            )
          }
        />
        <div>
          <button onClick={() => props.addPost(actionCreateAddPost())}>Add new post</button>
        </div>
      </div>
      {props.posts.map((x) => (
        <Post text={x.text} likesCount={x.likesCount} />
      ))}
    </div>
  );
};

export default MyPosts;
