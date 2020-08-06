import React from "react";
import { reduxForm } from "redux-form";
import SendMessageForm from "./SendMessageForm";

export default reduxForm({ form: "addMessage" })(SendMessageForm);
