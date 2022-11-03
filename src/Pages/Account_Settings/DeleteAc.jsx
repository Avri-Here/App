import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import img from "../../Img/user_delete.png";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
const axios = require("axios").default;

export default function DeleteAc(props) {
  const [status, setStatus] = useState(null);
  const ref = useRef(null);
  const navigate = useNavigate();
  function deleteUser() {
    const obb = { token: localStorage.getItem("token") };
    axios
      .post("https://sure-cook-production.up.railway.app/users/delete", obb, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        ref.current.style.display = "none";
        setStatus(true);
        setTimeout(() => {
          navigate("/Sign-In");
          props.reducer({ type: "showNav", showNav: false });
          localStorage.clear();
        }, 1000);
      })
      .catch((error) => {
        setStatus(false);
        ref.current.style.display = "none";
        setTimeout(() => {
          window.location.reload(false);
        }, 2500);
        console.log(error);
      });
  }
  return (
    <>
      <Card ref={ref} sx={{ maxWidth: 450 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              style={{ textAlign: "center", direction: "rtl" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              מחק את החשבון שלי !
            </Typography>
            <Typography
              style={{ textAlign: "center", direction: "rtl" }}
              variant="body2"
              color="text.secondary"
            >
              מחיקת חשבונך תגרום להסרה של כל הנתונים שלך, לא ניתן יהיה לשחזר את
              החשבון, המידע שלך ישמר לצרכי התייעלות גם לאחר מכן ..
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            size="small"
            color="primary"
            onClick={deleteUser}
            style={{ marginTop: "2vw", right: "-8vw" }}
          >
            Delete anyway !
          </Button>
        </CardActions>
      </Card>
      {status === true ? (
        <Stack spacing={2}>
          <Alert severity="success">
            <AlertTitle>Success !</AlertTitle>
            Your account has been successfully deleted !{" "}
            <strong>We are sorry to see you leave ..</strong>
          </Alert>
        </Stack>
      ) : status === false ? (
        <Stack spacing={2}>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            This is an error alert — <strong>check it out!</strong>
          </Alert>
        </Stack>
      ) : (
        <></>
      )}
    </>
  );
}
