import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../Img/Img1.jpg";

const axios = require("axios").default;

export default (props) => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [status, setStatus] = useState("");

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    console.log(inputs);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3001/users/signIn", inputs, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      .then(function (response) {
        console.log(response.data.message);
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          setStatus("Success ! You will immediately go to the requested page ");
          let temp = setInterval(() => {
            setStatus((last) => {
              return last + ". ";
            });
          }, 700);
          localStorage.setItem("UserName", response.data.message);
          console.log(response);
          setTimeout(() => {
            clearInterval(temp);
            // navigate("/ChatHere");
            navigate("/HomePage");
          }, 3500);
        }
      })
      .catch(function (error) {
        console.log(error);
        setStatus(error.response.data.message || "Erorr !");
      });
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", fontFamily: "cursive" }}>Sign in !</h1>
      <form
        style={{ textAlign: "center", fontFamily: "cursive" }}
        onSubmit={handleSubmit}
        method="post"
      >
        <div className="imgcontainer">
          <img
            style={{ width: "20vw", marginBottom: "1vw" }}
            src={img}
            alt="Avatar"
            className="avatar"
          />
        </div>
        <div className="container">
          <label htmlFor="uname">
            <b>Username Email:</b>
            <br />
          </label>
          <input
            style={{ marginBottom: "1vw", marginTop: "1vw" }}
            type="text"
            placeholder="Enter Username"
            required={true}
            name="userName"
            value={inputs.userName || ""}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <br />
          <input
            style={{ marginBottom: "1vw", marginTop: "1vw" }}
            type="password"
            placeholder="Enter Password"
            name="password"
            required={true}
            value={inputs.password || ""}
            onChange={handleChange}
          />
          <br />
          <button type="submit">Login</button>
        </div>
        <h3 style={{ textAlign: "center" }}>{status}</h3>
      </form>
      <button
        style={{
          fontFamily: "cursive",
          marginLeft: "46%",
          marginTop: "3vw",
        }}
        onClick={() => {
          navigate("/Sign-Up");
        }}
      >
        Do not have an account ?
      </button>
    </div>
  );
};
