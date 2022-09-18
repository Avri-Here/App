import { useState } from "react";
import { useNavigate } from "react-router-dom";

const axios = require("axios").default;

export default () => {
  const [inputs, setInputs] = useState({});
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  }

  async function handleSubmit(event) {
    const a1 = inputs;

    event.preventDefault();
    const response = await fetch("https://picsum.photos/200");

    a1.photoUser = response.url;
    console.log(a1);
    setInputs({});
    axios
      .post("http://localhost:3001/users/signUp", a1, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        console.log(response.data.message);
        if (response.status === 200) {
          setStatus(
            "Your account has been created !  Go now to the login page"
          );
          let temp = setInterval(() => {
            setStatus((last) => {
              return last + ". ";
            });
          }, 700);
          setTimeout(() => {
            clearInterval(temp);
            navigate("/Sign-In");
          }, 3500);
        }
      })
      .catch(function (error) {
        console.log(error.response.data.erorr);
        if (error.response.data.erorr.code === 11000) {
          setStatus("A user with this name exists in the system !");
        } else {
          setStatus(
            error.response.data.erorr.errors.userName.message || "Erorr !"
          );
        }
      });
  }

  return (
    <div className="App">
      <h1>Sign up !</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <br />
          <input
            type="text"
            required={true}
            name="userName"
            value={inputs.userName || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <br />
          <input
            type="text"
            name="password"
            required={true}
            value={inputs.password || ""}
            onChange={handleChange}
          />
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
      <button
        onClick={() => {
          navigate("/Sign-In");
        }}
      >
        Already have an account ?
      </button>
      <h1 style={{ textAlign: "center" }}>{status}</h1>
    </div>
  );
};
