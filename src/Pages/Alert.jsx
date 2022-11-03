import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useNavigate } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
  const navigate = useNavigate();

  const Disagree = () => {
    navigate("/HomePage");
  };

  return (
    <div>
      <Dialog
        open={true}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle style={{ direction: "rtl" }}>
          {"  תוכן זה נטען דרך אתר ממקור אחר, אנא קרא בעיון !"}
        </DialogTitle>
        <DialogContent style={{ direction: "rtl" }}>
          <DialogContentText id="alert-dialog-slide-description">
            מבזקי חדשות אלו נלקחו מאתר אינטרנט אחר עם היתר מפורש מבעל האתר,
            הצפייה בתוכן זה ניתנת גם דרך אתר{" "}
            <a href="https://www.kore.co.il/flashNews" target="_blank">
              {" "}
              כל רגע{" "}
            </a>
            , בלחיצה על המשך תועבר לנתיב המבוקש ..
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={props.loudNews}
            style={{ direction: "rtl", fontSize: "1rem" }}
          >
            המשך !
          </Button>
        </DialogActions>
        <DialogActions>
          <Button
            onClick={Disagree}
            style={{ direction: "rtl", fontSize: "1rem" }}
          >
            חזור לדף הבית ..
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
