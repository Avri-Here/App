import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import img from "../../Img/change_password.png";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
const axios = require("axios").default;

export default function ChangeMyPassword() {
  const [pass1, newPass1] = useState("");
  const [pass2, newPass2] = useState("");
  function ChangePassword() {
    if (Number(pass1) !== Number(pass2)) {
      return;
    }
    const send = { token: localStorage.getItem("token"), newPass: pass1 };
    axios
      .post("http://localhost:3001/users/Update", send, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((re) => {
        console.log(re);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <Card sx={{ maxWidth: 450 }}>
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
        <br/>
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
          style={{marginTop:"2vw", right:"-7vw"}}
        >
          Change password !
        </Button>
      </CardActions>
    </Card>
  );
}
