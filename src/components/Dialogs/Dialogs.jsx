import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

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
        <div>
          <textarea
            ref={currentMessageRef}
            placeholder="Write anything"
            value={props.newMessageText}
            onChange={() =>
              props.changeMessageText(currentMessageRef.current?.value)
            }
          ></textarea>
          <button onClick={() => props.addMessage()}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
