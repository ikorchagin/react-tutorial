import React from "react";
import { Field } from "redux-form";
import TextAreaControl from "../../../FormControls/TextAreaControl/TextAreaControl";

export default (props) => {
  let { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit(props.addPost)}>
      <div>
        <Field
          component={TextAreaControl}
          type="text"
          name="text"
          placeholder="Anything new?"
        />
      </div>
      <div>
        <button>Add new post</button>
      </div>
    </form>
  );
};
