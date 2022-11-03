import React from "react";
import ToDoList from "../Img/ToDoList.jpg";
import imgDelete from "../Img/delete.jpg";
import Dialog from "../Pages/Dialog";
import swal from "sweetalert";
import AlertTask from "../Pages/Dialog/AlertTask";
import DialogDeleteTasks from "../Pages/Dialog/DialogDeleteTasks";
import styled from "styled-components";
import { useState, useRef } from "react";
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
  const [taskArr, setTaskArr] = useState([]);
  const [showAlert, setShowAlert] = useState([false, false, false]);
  const taskName = useRef(null);
  const description = useRef(null);
  const priority = useRef(null);
  const timeEnd = useRef(null);
  function deleteAllTask() {
    const temp = [...showAlert];
    temp[1] = true;
    setShowAlert(temp);
  }
  async function loudTask() {
    console.log(localStorage.UserName);
    try {
      const resp = await axios.post("https://sure-cook-production.up.railway.app/Task/getAllTask", {
        userName: localStorage.getItem("UserName"),
      });
      alert(JSON.stringify(resp.data));
      console.log(resp);
    } catch (err) {
      console.error(err);
    }
  }
  async function addTask(e) {
    e.preventDefault();
    try {
      const resp = await axios.post("https://sure-cook-production.up.railway.app/Task/newTask", {
        userName: localStorage.getItem("UserName"),
        taskName: taskName.current.value,
        description: description.current.value,
        priority: priority.current.value,
        timeEnd: timeEnd.current.value,
      });
      if (resp.status === 200) {
        swal("! משימה נוספה ", " ! נשמרה במאגר המשימות שלך  ", "success");
      }
      console.log(resp.status);
    } catch (err) {
      swal(" ! error ! ", JSON.stringify(err), "error");
      console.error(err);
    }
  }
  return (
    <Box>
      <br />
      <form id="myDIV" className="container" onSubmit={addTask}>
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
              required
            />
          </div>
          <div className="col">
            <input
              ref={description}
              type="text"
              id="myInput"
              placeholder="נושא .."
              required
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
              required
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
              ref={timeEnd}
              placeholder=" תאריך סיום   .. "
              required
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
          <AlertTask reducer={props.reducer} state={props.state} />
          <br />
        </div>

        <button type="submit" className="btn btn-secondary btn-lg">
          Add new Task
        </button>
      </form>
      <hr />

      <br />
      <div className="container">
        <div
          className="row"
          style={{ color: "blue", direction: "rtl", marginLeft: "-89rem" }}
        >
          <div className="col-3">
            <img
              className="img-fluid"
              alt="Responsive image"
              style={{
                width: "7vw",
                height: "5vw",
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
              מחק את כל המטלות ..
            </div>
          </div>

          <div className="col-3">
            <img
              className="img-fluid"
              alt="Responsive image"
              style={{
                width: "7vw",
                height: "5vw",
                border: "5px solid mediumslateblue",
                borderRadius: "5vw",
              }}
              src={ToDoList}
              onClick={loudTask}
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
