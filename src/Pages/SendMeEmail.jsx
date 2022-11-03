import axios from "axios";
import React from "react";
import swal from "sweetalert";
export const SendMeEmail = () => {
  const nameRef = React.useRef(null);
  const LastRef = React.useRef(null);
  const email = React.useRef(null);
  const Phone = React.useRef(null);
  const message = React.useRef(null);
  function SendMeEmail(event) {
    event.preventDefault();
    axios
      .post("https://sure-cook-production.up.railway.app/SendMeEmail", {
        nameRef: nameRef.current.value,
        LastRef: LastRef.current.value,
        email: email.current.value,
        Phone: Phone.current.value,
        message: message.current.value,
      })
      .then((res) => {
        swal("Success !", "!   ההודעה נשלחה למנהל המערכת ", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 3500);
        console.log(res);
      });
  }
  return (
    <div className="formGmail">
      <form
        style={{ width: "50%" }}
        onSubmit={SendMeEmail}
        className="w3-container w3-card-4 w3-light-grey w3-text-blue w3-margin"
      >
        <br />
        <h2 className="w3-center"> Contact Us </h2>
        <br />
        <div className="w3-row w3-section">
          <div className="w3-col" style={{ width: "50px" }}>
            <i className="w3-xxlarge fa fa-user" />
          </div>
          <div className="w3-rest">
            <input
              required
              ref={nameRef}
              className="w3-input w3-border"
              name="first"
              type="text"
              placeholder="First Name"
            />
          </div>
        </div>
        <div className="w3-row w3-section">
          <div className="w3-col" style={{ width: "50px" }}>
            <i className="w3-xxlarge fa fa-user" />
          </div>
          <div className="w3-rest">
            <input
              required
              className="w3-input w3-border"
              name="last"
              ref={LastRef}
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="w3-row w3-section">
          <div className="w3-col" style={{ width: "50px" }}>
            <i className="w3-xxlarge fa fa-envelope-o" />
          </div>
          <div className="w3-rest">
            <input
              required
              className="w3-input w3-border"
              name="email"
              ref={email}
              type="text"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="w3-row w3-section">
          <div className="w3-col" style={{ width: "50px" }}>
            <i className="w3-xxlarge fa fa-phone" />
          </div>
          <div className="w3-rest">
            <input
              required
              ref={Phone}
              className="w3-input w3-border"
              name="phone"
              type="text"
              placeholder="Phone"
            />
          </div>
        </div>
        <div className="w3-row w3-section">
          <div className="w3-col" style={{ width: "50px" }}>
            <i className="w3-xxlarge fa fa-pencil" />
          </div>
          <div className="w3-rest">
            <input
              required
              ref={message}
              className="w3-input w3-border"
              name="message"
              type="text"
              placeholder="Message"
            />
          </div>
        </div>
        <p className="w3-center">
          <label className="w3-button w3-section w3-blue w3-ripple">
            <input type="submit" />
          </label>
        </p>
      </form>
    </div>
  );
};
