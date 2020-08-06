import React, { useEffect } from "react";
import style from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PreLoader from "../PreLoader/PreLoader";

const Profile = ({ currentProfile, currentStatus, getStatus, setStatus }) => {
  if (!currentProfile) {
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
          avatar={currentProfile.photos.large}
          description={currentStatus}
          name={currentProfile.fullName}
          getStatus={getStatus}
          setStatus={setStatus}
        />
        <MyPostsContainer />
      </div>
    </div>
  );
};

export default Profile;
