import React from "react";
import { reduxForm } from "redux-form";
import AddPostform from "./AddPostform";

export default reduxForm({ form: "addPost" })(AddPostform);
