import * as React from "react";
import Button from "@mui/material/Button";
import swal from 'sweetalert';


import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CircularProgress from "@mui/material/CircularProgress";

import { useState } from "react";
const axios = require("axios").default;
export default function FormDialog(props) {
  const [progress, setProgress] = useState(true);
  async function markAllTaskAsDone() {
    setProgress(false);
    setTimeout(() => {
        const temp = [props.showAlert];
        temp[0] = true;
        props.setShowAlert(false);
        swal("Success !", "! המטלות סומנו כבוצעו ", "success");
    }, 2000);
    try {
      const resp = await axios.post("https://sure-cook-production.up.railway.app/Task/markAll", {
        token: localStorage.getItem("token"),
      });
      console.log(resp);
    } catch (err) {
      console.error(err);
    }
  }

  const handleClose = () => {
    const temp = [props.showAlert];
    temp[0] = false;
    props.setShowAlert(false);
  };

  return (
    <div>
      {progress ? (
        <Dialog dir="rtl" open={true} onClose={handleClose}>
          <DialogTitle>סימון כל המטלות כהושלמו .. </DialogTitle>
          <DialogContent>
            <DialogContentText>
              פעולה זו תגדיר את כל המטלות כהושלמו, לאחר ביצוע הפעולה לא ניתו
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
            <Button onClick={markAllTaskAsDone}>המשך !</Button>
            <br />

            <Button onClick={handleClose}>חזור !</Button>
          </DialogActions>
        </Dialog>
      ) : (
        <></>
      )}
    </div>
  );
}
