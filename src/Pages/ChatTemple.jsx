import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
const ENDPOINT = "http://https://sure-cook-production.up.railway.app/";
const socketIOClient = io(ENDPOINT);
function ChatTemple(props) {
  const ref = useRef(null);
  useEffect(() => {
    socketIOClient.on("chat message", (message, userConvr) => {
      if (localStorage.getItem("userConvr") === userConvr) {
        props.setArrMessage((current) => [...current, message]);
        console.log(props.arrMessage.length);
      }
    });
  }, []);
  useEffect(() => {
    if (props.arrMessage.length > 4) {
      setTimeout(() => {
        ref.current.scrollIntoView();
      }, 300);
    }
  }, [props.arrMessage]);
  function sendMass() {
    const newMass = {
      from: localStorage.getItem("UserName"),
      messages: props.message,
      timeMass: new Date().getHours() + " : " + new Date().getMinutes(),
    };
    socketIOClient.emit(
      "chat message from clinet",
      newMass,
      localStorage.getItem("userConvr")
    );

    props.startChat(localStorage.getItem("chatWith"));
  }
  return (
    <>
      <div className="chat-about">
        <div className="chat-with">
          <h2 style={{ textAlign: "center", fontFamily: "system-ui" }}>
            Chat with {localStorage.getItem("chatWith")}
          </h2>
          <h4 style={{ textAlign: "center", fontFamily: "monospace" }}>
            {typeof props.arrMessage[0] === "object"
              ? "messages sent : " + props.arrMessage.length
              : "No messages have been sent yet"}
          </h4>
        </div>
      </div>
      <i className="fa fa-star" />
      <div className="chat">
        <div className="chat-history">
          <ul>
            {props.arrMessage.map((item, index) => {
              console.log(item);
              if (
                item.from === localStorage.getItem("UserName") &&
                typeof item === "object"
              ) {
                return (
                  
                  <li
                    key={index}
                    style={{ listStyleType: "none", fontFamily: "sans-serif" }}
                  >
                    <div className="message-data">
                      <span className="message-data-name">
                        <i className="fa fa-circle online" /> You
                      </span>

                      <span className="message-data-time">{item.timeMass}</span>
                      <h5 style={{direction:"rtl"}} className="message-data-time">{!item.isRead ? "לא נקרא" : "נקרא"}</h5>
                    </div>
                    <div
                      ref={index === props.arrMessage.length - 1 ? ref : null}
                      className="message my-message"
                    >
                      {item.messages}
                    </div>
                  </li>
                );
              } else if (typeof item === "object") {
                return (
                  <li
                    key={index}
                    style={{ listStyleType: "none", fontFamily: "cursive" }}
                    className="clearfix"
                  >
                    <div className="message-data align-right">
                      <span className="message-data-time">{item.timeMass}</span>
                      &nbsp; &nbsp;
                      <span className="message-data-name">{item.from}</span>
                      <i className="fa fa-circle me" />
                    </div>
                    <div
                      ref={index === props.arrMessage.length - 1 ? ref : null}
                      className="message other-message float-right"
                    >
                      {item.messages}
                    </div>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>

      <footer>
        <div style={{ marginTop: "15%" }}>
          <textarea
            style={{
              width: " 59%",
              height: "5vw",
              marginTop: "2vw",
              marginLeft: "20%",
              marginRight: "20%",
              background: "floralwhite",
            }}
            name="message-to-send"
            id="message-to-send"
            placeholder="Type your message"
            rows={3}
            onChange={(e) => {
              props.setMessage(e.target.value);
            }}
            value={props.message}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "2vw",
              width: "20vw",
              border: "3px solid green",
              borderRadius: "3vw",
              marginLeft: "34%",
              fontSize:"20px"
            }}
          onClick={sendMass}>Send
            
          </div>
        </div>
      </footer>
    </>
  );
}

export default ChatTemple;
