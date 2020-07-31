import React from "react";
import style from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PreLoader from "../PreLoader/PreLoader";

const Profile = (props) => {  
  if (!props.currentProfile) {
    return <PreLoader />;
  }
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
        <ProfileInfo
          avatar={props.currentProfile.photos.large}
          description={props.currentProfile.aboutMe}
          name={props.currentProfile.fullName}
        />
        <MyPostsContainer />
      </div>
    </div>
  );
};

export default Profile;
