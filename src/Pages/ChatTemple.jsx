import React from "react";
import img from "../Img/img_avatar.png";
import { useState, useEffect } from "react";
function ChatTemple(props) {
  const [message, setMessage] = useState("");
  return (
    <>
      <div className="chat-about">
        <div className="chat-with">
          <h1>Chat with {localStorage.getItem("chatWith")}</h1>
        </div>
        
      </div>
      <i className="fa fa-star" />
      <div className="chat">
        <div className="chat-history">
          <ul>
            {props.arrMessage.map((item, index) => {


              if (item.from == localStorage.getItem("UserName")) {
                return (
                  <li>
                    <div className="message-data">
                      <span className="message-data-name">
                        <i className="fa fa-circle online" /> {item.from}
                      </span>

                      <span className="message-data-time">{item.timeMass}</span>
                    </div>
                    <div className="message my-message">{item.messages}</div>
                  </li>
                );
              } else {
                return (
                  <li className="clearfix">
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
            props.startChat(localStorage.getItem("chatWith"));
          }}
        >
          Send
        </button>
      </div>
    </>
  );
}

export default ChatTemple;
