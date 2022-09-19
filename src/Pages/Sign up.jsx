import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const axios = require("axios").default;

export default () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.replace("http://localhost:3001/SignUp.html");
    }, 1000);
  }, []);
  return <h1>Move ..</h1>;
};
