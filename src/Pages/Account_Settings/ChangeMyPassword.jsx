import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import img from "../../Img/change_password.png";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import SendIcon from "@mui/icons-material/Send";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
const axios = require("axios").default;

export default function ChangeMyPassword() {
  const [pass1, newPass1] = useState("");
  const [pass2, newPass2] = useState("");
  const [status, setStatus] = useState(null);
  const ref = useRef(null);
  const navigate = useNavigate();
  function ChangePassword() {
    if ((Number(pass1) !== Number(pass2)) || (pass1 == "" || pass2 == "")) {
      alert("סיסמאות אינם תואמות !");
      return;
    }
    const send = { token: localStorage.getItem("token"), newPass: pass1 };
    axios
      .post("http://https://sure-cook-production.up.railway.app/users/Update", send, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((re) => {
        console.log(re);
        ref.current.style.display = "none"
        setStatus(true);
        setTimeout(() => {
          navigate("/Sign-In");
        }, 3000);
      })
      .catch((e) => {
        console.log(e);
        ref.current.style.display = "none"
        setStatus(false);
        setTimeout(() => {
          window.location.reload(false);
        }, 5000);
      });
  }
  return (
    <>
      <Card ref={ref} sx={{ maxWidth: 450 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ direction: "rtl" }}
            >
              שנה את הסיסמא שלי !
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ direction: "rtl" }}
            >
              בחר סיסמא חזקה כדי להגן על החשבון שלך מפני תקיפות או פריצות, מומלץ
              שהסיסמא החדשה תכיל מגוון סימנים מיוחדים, ובאורך של לפחות 8 תווים .
            </Typography>
          </CardContent>
        </CardActionArea>

        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            label=" New password"
            variant="standard"
            value={pass1}
            onChange={(e) => {
              newPass1(e.target.value);
            }}
          />
          <br />
          <TextField
            id="standard-basic"
            label="Type again"
            variant="standard"
            value={pass2}
            onChange={(e) => {
              newPass2(e.target.value);
            }}
          />
        </Box>
        <CardActions>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={ChangePassword}
            style={{ marginTop: "2vw", right: "-7vw" }}
          >
            Change password !
          </Button>
        </CardActions>
      </Card>
      {status === true ? (
        <Stack spacing={2}>
          <Alert severity="success">
            <AlertTitle>Success !</AlertTitle>
            סיסמתך שונתה בהצלחה !{" "}
            <strong>מייד תועבר לדף הכניסה להתחברות מחדש ..</strong>
          </Alert>
        </Stack>
      ) : status === false ? (
        <Stack spacing={2}>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            Something went wrong, try again <strong>we're sorry !</strong>
          </Alert>
        </Stack>
      ) : (
        <></>
      )}
    </>
  );
}
