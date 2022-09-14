import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
const axios = require("axios").default;

export default (props) => {
  const [arrUsers, setArrUsers] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post(
        "http://localhost:3001/users/",
        { token: localStorage.getItem("token") },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response);
        setArrUsers(response.data.message);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  if (arrUsers) {
    return (
      <>
        <p
          onClick={() => {
            navigate("/HomePage");
          }}
        >
          {props.name}
        </p>
        <ul>
          {arrUsers.map((item, index) => {
            return (
              <button
                style={{ margin: 0.5 + "vw" }}
                key={index}
                onClick={() => {}}
              >
                {item}
              </button>
            );
          })}
        </ul>
        <button 
          onClick={() => {
            navigate("/Account_Settings");
          }}
        >
          Change account settings
        </button>
      </>
    );
  } else {
    return <></>;
  }
};
