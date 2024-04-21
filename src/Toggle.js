import React from "react";
import "./toggle.css";

const Toggle = (values, checkedValue, setCheckedValue, id, name) => {
  const getOpposite = (v) =>
    values.values[Math.abs(values.values.indexOf(v) - 1)];

  return (
    <div className={"toggle"}>
      <label className="outer-toggle">
        <input
          type={"checkbox"}
          name={values.name}
          id={values.id}
          className={"toggle-input"}
          value={values.checkedValue}
          onChange={() => {
            values.setCheckedValue(getOpposite(values.checkedValue));
          }}
        />
        <label
          htmlFor={values.id}
          data-on={values.values[0]}
          data-off={values.values[1]}
          className="inner-toggle"
        />
      </label>
    </div>
  );
};

export default Toggle;
