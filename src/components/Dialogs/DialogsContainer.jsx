// eslint-disable-next-line no-unused-vars
import React from "react";
import Dialogs from "./Dialogs";
import { changeMessageText, addMessage } from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import withCheckAuth from "../../hoc/withCheckAuth";
import {
  selectNewMessageText,
  selectMessages,
  selectDialogs,
} from "../../redux/dialogs-selectors";
import { selectIsAuth } from "../../redux/auth-selectors";

let mapStateToProps = (state) => ({
  newMessageText: selectNewMessageText(state),
  messages: selectMessages(state),
  dialogs: selectDialogs(state),
  isAuth: selectIsAuth(state),
});

export default compose(
  withCheckAuth,
  connect(mapStateToProps, {
    changeMessageText,
    addMessage,
  })
)(Dialogs);
