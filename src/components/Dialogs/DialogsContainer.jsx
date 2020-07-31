// eslint-disable-next-line no-unused-vars
import React from "react";
import Dialogs from "./Dialogs";
import { changeMessageText, addMessage } from "../../redux/dialogs-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => ({
  newMessageText: state.dialogsPage.newMessageText,
  messages: state.dialogsPage.messages,
  dialogs: state.dialogsPage.dialogs,
});

const DialogsContainer = connect(mapStateToProps, {
  changeMessageText,
  addMessage,
})(Dialogs);

export default DialogsContainer;
