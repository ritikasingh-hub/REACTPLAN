import React, { useState } from "react";
import "./index.css";
function Plan(props) {
  const arr = props.p;
  const [checked, setChecked] = useState(false);

  const strikeHandler = (id) => {
    console.log("id in Plannnn",id);
    console.log("props.id in plannnnnnnnnnnnnnnnnnnn", props.id);
    if (id === props.id ) {
      if (checked) {
        setChecked(false);
      } else {
        setChecked(true);
      }
    }else{
        setChecked(false);
    }
  };
  return (
    <>
      <li
        className={
          checked
            ? "shadow p-2 my-2 col-sm-9 strike-text"
            : "shadow p-2 my-2 col-sm-9"
        }
        onClick={() => strikeHandler(props.id)}
      >
        <input
          type={"checkbox"}
          className="form-check-input plan-checkbox"
          checked={checked}
          readOnly
          id={props.id}
          onClick={() => strikeHandler(props.id)}
        />

        {props.value}
      </li>
      <button
        className="btn btn-danger my-2 col-sm-2 offset-1"
        onClick={() => {
          props.sendData(props.id);
        }}
      >
        X
      </button>

      {/* {
   arr.map((value, i) => {
    return (<React.Fragment key={i}>
     <li className="shadow p-2 my-2 col-sm-9">{value}</li>
     <button className="btn btn-danger my-2 col-sm-2 offset-1" onClick={() => { props.sendData(i) }}>X</button>
    </React.Fragment>)
   })
  } */}
    </>
  );
}

export default Plan;
