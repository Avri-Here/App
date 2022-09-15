import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ChatTemple from "./ChatTemple";
import styled from "styled-components";
import img from "../Img/img_avatar.png";
import io from "socket.io-client";
const axios = require("axios").default;
const ENDPOINT = "http://localhost:3001";
const socketIOClient = io(ENDPOINT);
const Box = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Lato:400,700);
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  body {
    background: #c5ddeb;
    font: 14px/20px "Lato", Arial, sans-serif;
    padding: 40px 0;
    color: white;
  }
  .container {
    margin: 0 auto;
    background: aliceblue;
    border-radius: 5px;
    width: 60%;
    overflow: auto;
  }
  .people-list {
    width: 260px;
    float: left;
  }
  .people-list .search {
    padding: 20px;
  }
  .people-list input {
    border-radius: 3px;
    border: none;
    padding: 14px;
    color: white;
    background: #6a6c75;
    width: 90%;
    font-size: 14px;
  }
  .people-list .fa-search {
    position: relative;
    left: -25px;
  }
  .people-list ul {
    padding: 20px;
    height: 770px;
  }
  .people-list ul li {
    padding-bottom: 20px;
  }
  .people-list img {
    float: left;
  }
  .people-list .about {
    float: left;
    margin-top: 8px;
  }
  .people-list .about {
    padding-left: 8px;
  }
  .people-list .status {
    color: #92959e;
  }
  .chat {
    float: left;
    background: #f2f5f8;
    border-top-right-radius: 5px;
    borderradius: 5px;
    width: 70%;
    overflow: auto;
    color: #434651;
  }
  .chat .chat-header {
    padding: 20px;
    border-bottom: 2px solid white;
  }
  .chat .chat-header img {
    float: left;
  }
  .chat .chat-header .chat-about {
    float: left;
    padding-left: 10px;
    margin-top: 6px;
  }
  .chat .chat-header .chat-with {
    font-weight: bold;
    font-size: 16px;
  }
  .chat .chat-header .chat-num-messages {
    color: #92959e;
  }
  .chat .chat-header .fa-star {
    float: right;
    color: #d8dadf;
    font-size: 20px;
    margin-top: 12px;
  }
  .chat .chat-history {
    padding: 30px 30px 20px;
    border-bottom: 2px solid white;
    overflow-y: scroll;
    height: 575px;
  }
  .chat .chat-history .message-data {
    margin-bottom: 15px;
  }
  .chat .chat-history .message-data-time {
    color: #a8aab1;
    padding-left: 6px;
  }
  .chat .chat-history .message {
    color: white;
    padding: 18px 20px;
    line-height: 26px;
    font-size: 16px;
    borderradius: 7px;
    margin-bottom: 30px;
    width: 90%;
    position: relative;
  }
  .chat .chat-history .message:after {
    bottom: 100%;
    left: 7%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-bottom-color: #86bb71;
    border-width: 10px;
    margin-left: -10px;
  }
  .chat .chat-history .my-message {
    background: #86bb71;
  }
  .chat .chat-history .other-message {
    background: #94c2ed;
  }
  .chat .chat-history .other-message:after {
    border-bottom-color: #94c2ed;
    left: 93%;
  }
  .chat .chat-message {
    padding: 30px;
  }
  .chat .chat-message textarea {
    width: 100%;
    border: none;
    padding: 10px 20px;
    font: 14px/22px "Lato", Arial, sans-serif;
    margin-bottom: 10px;
    borderradius: 5px;
    resize: none;
  }
  .chat .chat-message .fa-file-o,
  .chat .chat-message .fa-file-image-o {
    font-size: 16px;
    color: gray;
    cursor: pointer;
  }
  .chat .chat-message button {
    float: right;
    color: #94c2ed;
    font-size: 16px;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    font-weight: bold;
    background: #f2f5f8;
  }
  .chat .chat-message button:hover {
    color: #75b1e8;
  }
  .online,
  .offline,
  .me {
    margin-right: 3px;
    font-size: 10px;
  }
  .online {
    color: #86bb71;
  }
  .offline {
    color: #e38968;
  }
  .me {
    color: #94c2ed;
  }
  .align-left {
    text-align: left;
  }
  .align-right {
    text-align: right;
  }
  .float-right {
    float: right;
  }
  .clearfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
  }
`;

export default () => {
  const [message, setMessage] = useState("");
  const [arrUsers, setArrUsers] = useState(null);
  const [arrMessage, setArrMessage] = useState();
  const useref = useRef(null);
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
      socketIOClient.on("node-eve", (msg) =>
      {
        console.log(msg);
      })
  }, []);
  function a1()
  {
    socketIOClient.emit("From-Api", "msg")
  }
  function startChat(paramsUser) {
    localStorage.setItem("chatWith", paramsUser);
    const sorted = [localStorage.getItem("UserName"), paramsUser];
    const orderArry = sorted.sort((a, b) => a.localeCompare(b));
    let comper = " ";
    orderArry.forEach((element) => {
      comper = comper + element;
    });
    localStorage.setItem("userConvr", comper);
    axios
      .post(
        "http://localhost:3001/chat/startChat",
        {
          token: localStorage.getItem("token"),
          idWith: paramsUser,
          message: message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (!message) {
          setArrMessage(response.data.messages[0].messages);
          console.log(response);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    setMessage("");
  }

  if (arrUsers) {
    return (
      <Box>
        <button onClick={() => {a1()}}>On</button>
        <div className="container clearfix">
          <div className="people-list" id="people-list">
            <div className="search">
              <input type="text" placeholder="search" />
              <i className="fa fa-search" />
            </div>
            <ul className="list">
              {arrUsers.map((item, index) => {
                if (item !== localStorage.getItem("UserName")) {
                  return (
                    <li
                      key={index}
                      className="clearfix"
                      style={{ listStyleType: "none" }}
                      onClick={() => {
                        startChat(item);
                      }}
                    >
                      <img
                        style={{
                          width: "25%",
                          height: "auto",
                          borderRadius: "45%",
                        }}
                        src={img}
                        alt="avatar"
                      />
                      <div className="about">
                        <div className="name">{item}</div>
                        <div className="status">
                          <i className="fa fa-circle online" /> online ? !
                        </div>
                      </div>
                    </li>
                  );
                }
              })}
            </ul>
          </div>

          <div className="chat-header clearfix">
            <h1 style={{ textAlign: "center", fontFamily: "cursive" }}>
              Hello {localStorage.getItem("UserName")} !
            </h1>
            {arrMessage && (
              <ChatTemple
                refProp={useref}
                arrMessage={arrMessage}
                startChat={startChat}
                message={message}
                setMessage={setMessage}
                setArrMessage={setArrMessage}
              />
            )}
          </div>
        </div>
      </Box>
    );
  } else {
    return <></>;
  }
};
