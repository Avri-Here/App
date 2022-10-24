import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const axios = require("axios").default;

export default (props) => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [status, setStatus] = useState("");
  useEffect(() => {
    props.reducer({ type: "showNav", showNav: false });
  }, []);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    console.log(inputs);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3001/users/signIn", inputs)

      .then((response) => {
        console.log(response.data.message);
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          // setStatus("Success ! You will immediately go to the requested page ");
          // let temp = setInterval(() => {
          //   setStatus((last) => {
          //     return last + ". ";
          //   });
          // }, 250);
          localStorage.setItem("UserName", response.data.message);
          console.log(response);
          // setTimeout(() => {
          //   clearInterval(temp);
          //   navigate("/HomePage");
          //   props.reducer({ type: "showNav", showNav: true });
          // }, 1500);
          let timerInterval;
          Swal.fire({
            title: "Success !",
            html: "I will close in <b></b> milliseconds.",
            html: "You will immediately be transferred to the home page..",
            timer: 1500,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
              const b = Swal.getHtmlContainer().querySelector("b");
              timerInterval = setInterval(() => {
                // b.textContent = Swal.getTimerLeft();
              }, 850);
            },
            willClose: () => {
              clearInterval(timerInterval);
              navigate("/HomePage");
              props.reducer({ type: "showNav", showNav: true });
            },
          });
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message || "Erorr !"
        });
        
      });
  }

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "-webkit-xxx-large",
          marginBottom: "2%",
        }}
      >
        Sign in !
      </h1>
      <form
        style={{ textAlign: "center", fontFamily: "system-ui" }}
        onSubmit={handleSubmit}
        method="post"
      >
        <div className="imgcontainer">
          <img
            style={{ width: "35vw", marginBottom: "1vw" }}
            src={
              "https://img.freepik.com/premium-vector/online-registration-sign-up-with-man-sitting-near-smartphone_268404-95.jpg?w=2000"
            }
            alt="Avatar"
            className="avatar"
          />
        </div>
        <div className="container">
          <label htmlFor="uname">
            <b style={{ marginRight: "2vw" }}>Enter Username : </b>
          </label>

          <input
            style={{
              marginBottom: "1vw",
              marginTop: "1vw",
              marginRight: "2vw",
            }}
            type="text"
            placeholder=" Username"
            required={true}
            name="userName"
            value={inputs.userName || ""}
            onChange={handleChange}
          />

          <label htmlFor="psw">
            <b style={{ marginRight: "2vw" }}>Your Password : </b>
          </label>

          <input
            style={{ marginBottom: "1vw", marginTop: "1vw" }}
            type="password"
            placeholder=" Password"
            name="password"
            required={true}
            value={inputs.password || ""}
            onChange={handleChange}
          />
          <br />
          <br />
          <button className="btnLog" type="submit">
            Log in !
          </button>
        </div>
        <h3 style={{ textAlign: "center" }}>{status}</h3>
        <button
          className="btnLog"
          onClick={() => {
            navigate("/Sign-Up");
          }}
        >
          Do not have an account ?
        </button>
      </form>
    </div>
  );
};
