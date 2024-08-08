import React from 'react';
import { useNavigate } from 'react-router-dom';

const Test = () => {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate("/login")}>
      <p>Welcome to my React app!</p>
    </div>
  );
};

export default Test;
