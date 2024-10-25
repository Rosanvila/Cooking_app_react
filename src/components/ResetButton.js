import React from "react";

const ResetButton = ({ onResetCategory }) => {
  return (
    <button className="remove" onClick={onResetCategory}>
      Back
    </button>
  );
};

export default ResetButton;
