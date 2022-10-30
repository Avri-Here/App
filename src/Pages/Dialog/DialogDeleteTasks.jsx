import * as React from "react";
import Button from "@mui/material/Button";
import swal from "sweetalert";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CircularProgress from "@mui/material/CircularProgress";

import { useState } from "react";
const axios = require("axios").default;
export default function DialogDeleteTasks(props) {
  const [progress, setProgress] = useState(true);
  async function deleteAllTask() {
    setProgress(false);
    setTimeout(() => {
      const temp = [props.showAlert];
      temp[1] = true;
      props.setShowAlert(temp);
      swal("Success !", "! המטלות נמחקו בהצלחה ", "success");
    }, 2000);
    try {
      const resp = await axios.post("http://localhost:3001/Task/deleteAll", {
        token: localStorage.getItem("token"),
      });
      console.log(resp);
    } catch (err) {
      console.error(err);
    }
  }

  const handleClose = () => {
    const temp = [props.showAlert];
    temp[1] = false;
    props.setShowAlert(false);
  };

  return (
    <div>
      {progress ? (
        <Dialog dir="rtl" open={true} onClose={handleClose}>
          <DialogTitle>סימון כל המטלות כהושלמו .. </DialogTitle>
          <DialogContent>
            <DialogContentText>
              פעולה זו תגדיר את כל המטלות כהושלמו, לאחר ביצוע הפעולה לא ניתן
              יהיה לחזור למצב הקודם ..
            </DialogContentText>
            {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="text"
            fullWidth
            variant="standard"
          /> */}
          </DialogContent>
          <DialogActions>
            <Button onClick={deleteAllTask}>המשך !</Button>
            <br />
            <Button onClick={handleClose}>חזור !</Button>
          </DialogActions>
        </Dialog>
      ) : (
        <CircularProgress disableShrink />
      )}
    </div>
  );
}
