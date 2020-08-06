import React, { useState } from "react";

export default ({ status, setStatus }) => {
  let inputRef = React.createRef();
  const [state, setState] = useState({
    editMode: false,
    tempStatus: status,
  });

  const editMode = (value) => {
    setState({ ...state, editMode: value });
  };

  const fetchStatus = () => {
    setStatus(state.tempStatus);
    editMode(false);
  };

  return (
    <div>
      {!state.editMode && (
        <div>
          <span onClick={() => editMode(true)}>
            {state.tempStatus === null ? "Без статуса" : state.tempStatus}
          </span>
        </div>
      )}
      {state.editMode && (
        <div>
          <input
            ref={inputRef}
            autoFocus={true}
            onChange={() =>
              setState({
                ...state,
                tempStatus: inputRef.current.value,
              })
            }
            onBlur={() => fetchStatus()}
            type="text"
            value={state.tempStatus}
          />
        </div>
      )}
    </div>
  );
};
