// import img from "../Img/img_avatar.png";
// import { useState, useEffect } from "react";

import React, { useRef } from "react";
import io from "socket.io-client";
function ChatTemple(props) {

  const ENDPOINT = "http://localhost:3001";
  const options = {
    rememberUpgrade: true,
    transports: ["websocket"],
    secure: true,
    rejectUnauthorized: false,
  };
  const socketIOClient = io(ENDPOINT, options);
  function sendMass() {
    socketIOClient.emit(
      "chat message from clinet",
      props.message,
      localStorage.getItem("userConvr")
    );

    socketIOClient.once("chat message", (message, userConvr) => {
      
      if (true) {
        const newMass = {
          from: localStorage.getItem("UserName"),
          messages: message,
          timeMass: new Date().getHours() + " : " + new Date().getMinutes()
        };
        console.log(message, userConvr);
        // props.refProp.current.scrollTop = props.refProp.current.clientHeight;
        // window.scrollTo(0, document.body.scrollHeight);
        // props.setArrMessage((current) => [...current, newMass]);
        // console.log(props.arrMessage);
      }
    });
    props.startChat(localStorage.getItem("chatWith"));
  }
  return (
    <>
      <div className="chat-about">
        <div className="chat-with">
          <h1>Chat with {localStorage.getItem("chatWith")}</h1>
          <h1>
            {typeof props.arrMessage[0] === "object"
              ? "messages sent : " + props.arrMessage.length
              : "No messages have been sent yet"}
          </h1>
        </div>
      </div>
      <i className="fa fa-star" />
      <div className="chat">
        <div className="chat-history">
          <ul>
            {props.arrMessage.map((item, index) => {
              if (
                item.from === localStorage.getItem("UserName") &&
                typeof item === "object"
              ) {
                return (
                  <li style={{ listStyleType: "none" }}>
                    <div className="message-data">
                      <span className="message-data-name">
                        <i className="fa fa-circle online" /> {item.from}
                      </span>

                      <span className="message-data-time">{item.timeMass}</span>
                    </div>
                    <div className="message my-message">{item.messages}</div>
                  </li>
                );
              } else if (typeof item === "object") {
                return (
                  <li style={{ listStyleType: "none" }} className="clearfix">
                    <div className="message-data align-right">
                      <span className="message-data-time">{item.timeMass}</span>
                      &nbsp; &nbsp;
                      <span className="message-data-name">{item.from}</span>
                      <i className="fa fa-circle me" />
                    </div>
                    <div className="message other-message float-right">
                      {item.messages}
                    </div>
                  </li>
                );
              }
            })}
           
          </ul>
        </div>
      </div>
      <div className="chat-message clearfix">
        <textarea
          name="message-to-send"
          id="message-to-send"
          placeholder="Type your message"
          rows={3}
          defaultValue={""}
          value={props.message}
          onChange={(e) => {
            props.setMessage(e.target.value);
          }}
        />
        <i className="fa fa-file-o" /> &nbsp;&nbsp;&nbsp;
        <i className="fa fa-file-image-o" />
        <button
          onClick={() => {
            sendMass();
          }}
        >
          Send
        </button>
      </div>
    </>
  );
}

export default ChatTemple;
