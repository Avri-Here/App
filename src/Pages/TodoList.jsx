import React from "react";
import ToDoList from "../Img/ToDoList.jpg";
import imgDelete from "../Img/delete.jpg";
import imgDone from "../Img/Done.jpg";
import Dialog from "../Pages/Dialog";
import AlertTask from "../Pages/Dialog/AlertTask";
import DialogDeleteTasks from "../Pages/Dialog/DialogDeleteTasks";
import styled from "styled-components";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useState, useEffect, useRef } from "react";
const axios = require("axios").default;
const Box = styled.div`
  body {
    margin: 0;
    min-width: 250px;
  }

  /* Include the padding and border in an element's total width and height */
  * {
    box-sizing: border-box;
  }

  /* Remove margins and padding from the list */
  ul {
    margin: 0;
    padding: 0;
  }

  /* Style the list items */
  ul li {
    cursor: pointer;
    position: relative;
    padding: 12px 8px 12px 40px;
    list-style-type: none;
    background: #eee;
    font-size: 18px;
    transition: 0.2s;

    /* make the list items unselectable */
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Set all odd list items to a different color (zebra-stripes) */
  ul li:nth-child(odd) {
    background: #f9f9f9;
  }

  /* Darker background-color on hover */
  ul li:hover {
    background: #ddd;
  }

  /* When clicked on, add a background color and strike out text */
  ul li.checked {
    background: #888;
    color: #fff;
    text-decoration: line-through;
  }

  /* Add a "checked" mark when clicked on */
  ul li.checked::before {
    content: "";
    position: absolute;
    border-color: #fff;
    border-style: solid;
    border-width: 0 2px 2px 0;
    top: 10px;
    left: 16px;
    transform: rotate(45deg);
    height: 15px;
    width: 7px;
  }

  /* Style the close button */
  .close {
    position: absolute;
    right: 0;
    top: 0;
    padding: 12px 16px 12px 16px;
  }

  .close:hover {
    background-color: #f44336;
    color: white;
  }

  /* Style the container */
  .container {
    background-color: initial;
    color: white;
    text-align: center;
  }

  /* Clear floats after the container */
  .container:after {
    content: "";
    display: table;
    clear: both;
  }

  /* Style the input */
  input {
    margin-bottom: 1.5vw;
    min-width: 100%;
    border: solid 2px gray;
    border-radius: 0.5vw;
    padding: 10px;
    direction: rtl;
    font-size: 18px;
  }
`;
export default (props) => {
  useEffect(() =>
  {
    console.log(props);
  })
  const [taskArr, setTaskArr] = useState([]);
  const [showAlert, setShowAlert] = useState([false, false, false]);
  const [txt, setText] = useState("");
  const taskName = useRef(null);
  const description = useRef(null);
  const priority = useRef(null);
  const timeStart = useRef(null);
  const timeEnd = useRef(null);
  let alarmMe = false;
  function deleteAllTask() {
    const temp = [showAlert];
    temp[1] = true;
    setShowAlert(temp);
  }
  function loudTask() {}
  function markAllTaskAsDone() {
    const temp = [showAlert];
    temp[0] = true;
    setShowAlert(temp);
  }
  async function addTask() {
    try {
      const resp = await axios.post("http://localhost:3001/Task/newTask", {
        taskName: taskName.current.value,
        description: description.current.value,
        priority: priority.current.value,
        timeStart: timeStart.current.value,
        timeEnd: timeEnd.current.value,
        alarmMe: alarmMe,
        token: localStorage.getItem("token"),
      });
      console.log(resp);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <Box>
      <br />
      <div id="myDIV" className="container">
        <h2
          style={{
            margin: "6px",
            color: "cornflowerblue",
            fontFamily: "inherit",
          }}
        >
          צור משימה חדשה
        </h2>
        <br />
        <div className="row">
          <div className="col">
            <input
              ref={taskName}
              type="text"
              id="myInput"
              placeholder="תיאור .."
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          </div>
          <div className="col">
            <input
              ref={description}
              type="text"
              id="myInput"
              placeholder="נושא .."
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              ref={priority}
              type="text"
              list="option"
              id="myInput"
              placeholder="עדיפות .."
            />
            <datalist id="option">
              <option direction="rtl">גבוהה</option>
              <option direction="rtl">ביניים</option>
              <option direction="rtl">נמוכה</option>
            </datalist>
          </div>

          <div className="col">
            <input
              onClick={(e) => {
                e.target.type = "date";
                e.target.value = new Date().toISOString().slice(0, 10);
              }}
              id="myInput"
              ref={timeStart}
              placeholder="תאריך .. "
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          </div>
        </div>
        <div
          style={{
            margin: "6px",
            color: "cornflowerblue",
            fontFamily: "inherit",
          }}
        >
          <br />
          <AlertTask reducer={props.reducer} />
          <br />
        </div>

        <button
          onClick={addTask}
          type="button"
          className="btn btn-secondary btn-lg"
        >
          Add new Task
        </button>
      </div>
      <hr />

      <br />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <img
              className="img-fluid"
              alt="Responsive image"
              style={{
                width: "11vw",
                height: "10vw",
                border: "5px solid mediumslateblue",
                borderRadius: "5vw",
              }}
              onClick={deleteAllTask}
              src={imgDelete}
            ></img>
            <div
              style={{ color: "blue", direction: "rtl" }}
              className="centered"
            >
              מחק את כל המטלות עד עתה ..
            </div>
          </div>

          <div className="col-6">
            <img
              className="img-fluid"
              alt="Responsive image"
              style={{
                width: "11vw",
                height: "10vw",
                border: "5px solid mediumslateblue",
                borderRadius: "5vw",
              }}
              onClick={markAllTaskAsDone}
              src={imgDone}
            ></img>
            <div
              style={{ color: "blue", direction: "rtl" }}
              className="centered"
            >
              {" "}
              סמן את כל המטלות כהושלמו ..
            </div>
          </div>
          <div className="col-3">
            <img
              className="img-fluid"
              alt="Responsive image"
              style={{
                width: "11vw",
                height: "10vw",
                border: "5px solid mediumslateblue",
                borderRadius: "5vw",
              }}
              onClick={loudTask}
              src={ToDoList}
            ></img>
            <div
              style={{ color: "blue", direction: "rtl" }}
              className="centered"
            >
              {" "}
              הצג את רשימת המטלות ..
            </div>
          </div>
        </div>
        {showAlert[0] && (
          <Dialog setShowAlert={setShowAlert} showAlert={showAlert} />
        )}
        {showAlert[1] && (
          <DialogDeleteTasks
            setShowAlert={setShowAlert}
            showAlert={showAlert}
          />
        )}
        {showAlert[2] && (
          <Dialog setShowAlert={setShowAlert} showAlert={showAlert} />
        )}
      </div>
    </Box>
  );
};
