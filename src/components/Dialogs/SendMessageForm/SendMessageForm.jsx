import React from "react";
import { Field } from "redux-form";
import TextAreaControl from "../../common/FormControls/TextAreaControl/TextAreaControl";
import { required, maxLength300 } from "../../../utils/validators/validators";

export default (props) => {
  let { handleSubmit, addMessage } = props;
  return (
    <form onSubmit={handleSubmit(addMessage)}>
      <div>
        <Field
          component={TextAreaControl}
          validate={[required, maxLength300]}
          name="text"
          placeholder="Write anything"
        ></Field>
        <button>Send</button>
      </div>
    </form>
  );
};
