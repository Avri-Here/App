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
    try {
      const resp = await axios.post("https://sure-cook-production.up.railway.app/Task/deleteAll", {
        userName: localStorage.getItem("UserName"),
      });
      const temp = [...props.showAlert];
      console.log(temp);
      temp[1] = false;
      props.setShowAlert(temp);
      swal("Success !", "! המטלות נמחקו בהצלחה ", "success");
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
          <DialogTitle>מחיקת כל המטלות  .. </DialogTitle>
          <DialogContent>
            <DialogContentText>
              פעולה זו תמחק את כל המטלות עד עתה, לאחר ביצוע המחיקה לא ניתן
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
        <CircularProgress style={{position:"absolute"}} disableShrink />
      )}
    </div>
  );
}
