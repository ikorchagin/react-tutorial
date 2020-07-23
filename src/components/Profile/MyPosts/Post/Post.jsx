import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={style.item}>
      <img src="https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"></img>
      {props.text}
      <div>
        <span>{props.likesCount} likes</span>
      </div>
    </div>
  );
};

export default Post;
