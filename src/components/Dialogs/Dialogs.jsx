import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import SendMessageFormContainer from "./SendMessageForm/SendMessageFormContainer";

const Profile = (props) => {
  let currentMessageRef = React.createRef();
  return (
    <div className={style.dialogs_page}>
      <nav className={style.dialogs}>
        {props.dialogs.map((x) => (
          <DialogItem name={x.name} id={x.id} isActive={x.isActive} />
        ))}
      </nav>

      <div className={style.messages}>
        {props.messages.map((x) => (
          <Message text={x.text} />
        ))}
        <SendMessageFormContainer addMessage={props.addMessage} />
      </div>
    </div>
  );
};

export default Profile;
