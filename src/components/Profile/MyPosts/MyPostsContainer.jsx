import React from "react";
import MyPosts from "./MyPosts";
import { addPost, changeNewPostText } from "../../../redux/profile-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const MyPostsContainer = connect(mapStateToProps, {
  addPost,
  changeNewPostText,
})(MyPosts);

export default MyPostsContainer;
