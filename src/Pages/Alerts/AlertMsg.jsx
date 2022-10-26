import * as React from "react";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { useState, useEffect, useRef } from "react";
import { blue } from "@mui/material/colors";

function SimpleDialog(props) {
  const [msg, setMsg] = useState([]);
  const text = useRef("התזכורות שלך !");
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
    // localStorage.removeItem("valueAlertArr");
    // setMsg([]);
  };

  useEffect(() => {
    if (localStorage.getItem("valueAlertArr")) {
      setMsg(JSON.parse(localStorage.getItem("valueAlertArr")));
    }
  }, []);

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle style={{ direction: "rtl" }}>{text.current}</DialogTitle>
      <List sx={{ pt: 0 }}>
        {msg.map((email) => (
          <>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <AssignmentIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </>
        ))}
      </List>
    </Dialog>
  );
}

export default function SimpleDialogDemo(props) {
  const [selectedValue, setSelectedValue] = React.useState([]);

  const handleClose = (value) => {
    props.setalert(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <SimpleDialog
        selectedValue={selectedValue}
        open={props.alert}
        onClose={handleClose}
      />
    </div>
  );
}
