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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const axios = require("axios").default;

export default function DeleteAc() {
  const [status, setStatus] = useState(null);
  const navigate = useNavigate();
  function deleteUser() {
    const obb = { token: localStorage.getItem("token") };
    axios
      .post("http://localhost:3001/users/delete", obb, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        setStatus(true);
        setTimeout(() => {
          navigate("/Sign-In");
        }, 5000);
      })
      .catch((error) => {
        setStatus(false);
        setTimeout(() => {
          navigate("./");
        }, 3000);
        console.log(error);
      });
  }
  return (
    <>
      <Card sx={{ maxWidth: 450 }}>
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
        <Stack
          sx={{ width: "50%" }}
          style={{ marginLeft: "28%", marginRight: "-20vw", marginTop: "3vw" }}
          spacing={2}
        >
          <Alert severity="success">
            <AlertTitle>Success !</AlertTitle>
            Your account has been successfully deleted !{" "}
            <strong>We are sorry to see you leave ..</strong>
          </Alert>
        </Stack>
      ) : status === false ? (
        <Stack
          sx={{ width: "50%" }}
          style={{ marginLeft: "28%", marginRight: "-20vw", marginTop: "3vw" }}
          spacing={2}
        >
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
