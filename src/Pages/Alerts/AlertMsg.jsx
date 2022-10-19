import * as React from "react";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { useState, useEffect, useRef } from "react";
import { blue } from "@mui/material/colors";

let emails = [];

function SimpleDialog(props) {
  const text = useRef("התזכורות שלך !");
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    // onClose(value);
  };
  useEffect(() => {
    if (localStorage.getItem("valueAlertArr")) {
      emails = JSON.parse(localStorage.getItem("valueAlertArr"));
    } else {
      text.current = "אין משימות !";
    }
  }, []);

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle style={{ direction: "rtl" }}>{text.current}</DialogTitle>
      <List sx={{ pt: 0 }}>
        {emails.map((email) => (
          <ListItem button key={email}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <AssignmentIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

export default function SimpleDialogDemo(props) {
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

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
