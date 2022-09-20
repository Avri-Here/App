import { useState } from "react";
const axios = require("axios").default;
export default (props) => {
  const [status, setStatus] = useState({ m1: "", m2: "" });
  const [pass, newPass] = useState("");

  function deleteUser() {
    const obb = { token: localStorage.getItem("token") };
    console.log(obb);
    axios
      .post("http://localhost:3001/users/delete", obb, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        console.log(response);
        setStatus((pre) => {
          return { ...pre, m1: "צר לנו שאתה עוזב .. " };
        });
        setStatus((pre) => {
          return { ...pre, m2: "תוכל ליצור חשבון בכל זמן !" };
        });
      })
      .catch(function (error) {
        console.log(error);
        setStatus((pre) => {
          return { ...pre, m2: error.response.data.message };
        });
      });
  }
  function ChangeMyPassword() {
    const send = { token: localStorage.getItem("token"), newPass: pass };
    axios
      .post("http://localhost:3001/users/Update", send, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((re) => {
        console.log(re);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <div>
      <h1>Hello {props.name} !</h1>
      <h2>Account Settings</h2>
      <button
        onClick={() => {
          deleteUser();
        }}
      >
        Delete My User !
      </button>
      <div id="newPaa">
        <label htmlFor="pass">New Password</label>
        <br />
        <input
          type="Password"
          name="pass"
          id="pass"
          value={pass}
          onChange={(v) => {
            newPass(v.target.value);
          }}
        />
        <button
          onClick={() => {
            ChangeMyPassword();
          }}
        >
          Change my password ..
        </button>
      </div>

      <p dir="rtl" style={{ textAlign: "center" }}>
        {status.m1}
      </p>
      <hr />
      <p dir="rtl" style={{ textAlign: "center" }}>
        {status.m2}
      </p>
    </div>
  );
};
