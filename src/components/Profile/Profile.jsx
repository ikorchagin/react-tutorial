import React from "react";
import style from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={style.profile}>
      <div>
        <img
          className={`${style.profile_hat} shadow`}
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
          alt=""
        ></img>
      </div>
      <div className={style.content}>
        <ProfileInfo />
        <MyPostsContainer />
      </div>
    </div>
  );
};

export default Profile;
