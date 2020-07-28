import React from "react";
import MyPosts from "./MyPosts";
import {
  actionCreateAddPost,
  actionCreateChangeNewPostText,
} from "../../../redux/profile-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  debugger;
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addPost: () => dispatch(actionCreateAddPost()),
  changeNewPostText: (text) => dispatch(actionCreateChangeNewPostText(text)),
});

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
