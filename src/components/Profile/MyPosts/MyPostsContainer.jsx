import React from "react";
import MyPosts from "./MyPosts";
import { addPost, changeNewPostText } from "../../../redux/profile-reducer";
import { connect } from "react-redux";
import {
  selectPosts,
  selectNewPostText,
} from "../../../redux/profile-selectors";

const mapStateToProps = (state) => {
  return {
    posts: selectPosts(state),
    newPostText: selectNewPostText(state),
  };
};

const MyPostsContainer = connect(mapStateToProps, {
  addPost,
  changeNewPostText,
})(MyPosts);

export default MyPostsContainer;
