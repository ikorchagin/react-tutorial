import React, { useEffect } from "react";
import style from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PreLoader from "../common/PreLoader/PreLoader";

const Profile = ({
  currentProfile,
  currentStatus,
  getStatus,
  setStatus,
  setProfileImage,
  profileImage,
}) => {
  if (!currentProfile) {
    return <PreLoader />;
  }

  const onPhotoChanging = (e) => {
    if (e.target.files.length) {
      setProfileImage(e.target.files[0]);
    }
  };

  return (
    <div className={style.profile}>
      <div>
        <img
          className={`${style.profile_hat} shadow`}
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
          alt=""
        ></img>
        <input type="file" onChange={onPhotoChanging} />
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
