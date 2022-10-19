import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
const ENDPOINT = "http://localhost:3001";
const socketIOClient = io(ENDPOINT);

export default function FormDialog(props) {
  useEffect(() => {
    socketIOClient.on("alertUser", (timeAlert, user, valueAlert) => {
      const valueAlertArr = [];
      // if (localStorage.getItem("userConvr") === user) {
      props.reducer({
        type: "NotificationsIconAlertNav",
        NotificationsIconAlertNav: 1,
      });
      console.log(valueAlert);
      if (localStorage.getItem("valueAlertArr")) {
        let tempArr = JSON.parse(localStorage.getItem("valueAlertArr"));
        tempArr.push(valueAlert);
        localStorage.setItem("valueAlertArr", JSON.stringify(tempArr));
      } else {
        valueAlertArr.push(valueAlert);
        localStorage.setItem("valueAlertArr", JSON.stringify(valueAlertArr));
      }

      // }
    });
  }, []);
  const [open, setOpen] = React.useState(false);
  const [alertMe, setAlertMe] = React.useState("");
  const [valueAlert, setValueAlert] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const runAlert = () => {
    const date = +new Date(alertMe);
    setOpen(false);
    console.log(date, alertMe);
    socketIOClient.emit(
      "alertUser",
      date,
      localStorage.getItem("UserName"),
      valueAlert
    );
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        .. קבל תזכורת לחלון ההתראות בלבד
      </Button>
      <Dialog style={{ direction: "rtl" }} open={open} onClose={handleClose}>
        <DialogTitle>תזכר אותי !</DialogTitle>
        <DialogContent>
          <DialogContentText style={{ direction: "rtl" }}>
            תקבל התראה לחלון ההתראות כשאתה מחובר כאן, כדאי ומומלץ להמשיך להישאר
            מחובר כדי לא לפספס אף מטלה או תזכורת ..
          </DialogContentText>
          <TextField
            onClick={(e) => {
              let currentDate = new Date().toISOString().slice(0, -8);
              e.target.min = currentDate;
              e.target.type = "datetime-local";
            }}
            onBlur={(e) => {
              e.target.type = "";
            }}
            autoFocus
            margin="dense"
            id="name"
            label="Time & Date"
            fullWidth
            autoComplete="off"
            value={alertMe}
            onChange={(e) => {
              setAlertMe(e.target.value);
            }}
          />
          <TextField
            margin="dense"
            type="text"
            fullWidth
            value={valueAlert}
            onChange={(e) => {
              setValueAlert(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions style={{ margin: "auto" }}>
          <Button onClick={handleClose}>בטל !</Button>
          <Button style={{ direction: "rtl" }} onClick={runAlert}>
            הפעל התראה !
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
