import React from "react";
import Dialogs from "./Dialogs";
import {
  actionCreateChangeMessageText,
  actionCreateAddMessage,
} from "../../redux/dialogs-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => ({
  newMessageText: state.dialogsPage.newMessageText,
  messages: state.dialogsPage.messages,
  dialogs: state.dialogsPage.dialogs,
});

let mapDispatchToState = (dispatch) => ({
  addMessage: () => dispatch(actionCreateAddMessage()),
  changeNewMessageText: (text) => dispatch(actionCreateChangeMessageText(text)),
});

const DialogsContainer = connect(mapStateToProps, mapDispatchToState)(Dialogs);

export default DialogsContainer;
