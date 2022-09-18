import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Try } from "./Try";
const axios = require("axios").default;

export default (props) => {
  const navigate = useNavigate();

  return (
    <>
      <>
        <Try />
        <h1 style={{ textAlign: "center", fontFamily: "cursive" }}>
          {localStorage.getItem("UserName")} Wellcome !
        </h1>
      </>
      <button
        style={{ textAlign: "center", fontFamily: "cursive" }}
        onClick={() => {
          navigate("/Sign-In");
        }}
      >
        Log out
      </button>

      <button
        onClick={() => {
          navigate("/ChatHere");
        }}
      >
        Start chatting with other users!
      </button>
      <button
        onClick={() => {
          navigate("/Account_Settings");
        }}
      >
        Change account settings
      </button>
    </>
  );
};
