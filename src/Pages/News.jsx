import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Alert from "./Alert";
import { useState, useEffect } from "react";
const axios = require("axios").default;
export default function News() {
  const [arrNews, setArrNews] = useState(null);
  function loudNews() {
    try {
      setArrNews(JSON.parse(sessionStorage.getItem("newsArr")));
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    axios("http://localhost:3001/news").then((res) => {
      console.log(res);
      sessionStorage.setItem("newsArr", JSON.stringify(res.data.News));
    });
  }, []);

  return arrNews ? (
    <>
      <h1 style={{ textAlign: "center", direction: "rtl" }}>מבזקים כל רגע !</h1>
      <br />
      <List
        style={{ direction: "rtl" }}
        sx={{ width: "100%", maxWidth: "90%", margin: "auto" }}
      >
        {arrNews.map((item, index) => {
          return (
            <>
              <div key={index}style={{ textAlign: "center" }}>
                <ListItem key={index} alignItems="flex-start">
                  <ListItemText
                    className="txt"
                    style={{ textAlign: "center" }}
                    primary={item.time.slice(11, 17)}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          <br />
                          {item.data}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </div>
            </>
          );
        })}
      </List>
    </>
  ) : (
    <>
      <Alert loudNews={loudNews} />
    </>
  );
}
