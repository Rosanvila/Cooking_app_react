import React from "react";
import { useNavigate } from "react-router-dom";

const ResetButton = ({ setSearchQuery, setSelectedCategory }) => {
  const navigate = useNavigate();

  const handleReset = () => {
    if (setSearchQuery) setSearchQuery("");
    if (setSelectedCategory) setSelectedCategory("");
    navigate("/");
  };

  return (
    <button className="remove" onClick={handleReset}>
      Back
    </button>
  );
};

export default ResetButton;
