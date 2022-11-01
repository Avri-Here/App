import React from "react";

export const SendMeEmail = () => {

  return (
    <form
      action="/action_page.php"
      className="w3-container w3-card-4 w3-light-grey w3-text-blue w3-margin"
    >
      <h2 className="w3-center">צור קשר</h2>
      <br/>
      <div className="w3-row w3-section">
        <div className="w3-col" style={{ width: "50px" }}>
          <i className="w3-xxlarge fa fa-user" />
        </div>
        <div className="w3-rest">
          <input
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
            className="w3-input w3-border"
            name="last"
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
            className="w3-input w3-border"
            name="email"
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
            className="w3-input w3-border"
            name="message"
            type="text"
            placeholder="Message"
          />
        </div>
      </div>
      <p className="w3-center">
        <button className="w3-button w3-section w3-blue w3-ripple">
          {" "}
          Send{" "}
        </button>
      </p>
    </form>
  );
};
