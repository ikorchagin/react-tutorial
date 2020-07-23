import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"

const Profile = (props) => {
  return (
    <div className={style.dialogs_page}>
      <nav className={style.dialogs}>
        {props.state.dialogs.map(x => <DialogItem name={x.name} id={x.id}/>)}
      </nav>
      <div className={style.messages}>
        {props.state.messages.map(x => <Message text={x.text}/>)}
        <div>
        <textarea placeholder='Write anything'></textarea>
        <button>Send</button>
      </div>
      </div>
    </div>
  );
};

export default Profile;
