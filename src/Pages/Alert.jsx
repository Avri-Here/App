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
        <DialogTitle style={{ direction: "rtl" }}>{"  תוכן זה נטען דרך אתר ממקור אחר, להמשיך ?"}</DialogTitle>
        <DialogContent style={{ direction: "rtl" }}>
          <DialogContentText id="alert-dialog-slide-description">
        מבזקי חדשות אלו נלקחו מאתר אינטרנט אחר ללא היתר מפורש ושלא כדין, הצפייה בתוכן עלולה להוות עבירה פלילית או עילה לתביעה, בלחיצה על המשך אתם מאשרים שקראתם הודעה זו ואתם מבינים את ההשלכות.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={Disagree} style={{ direction: "rtl" }}>איני מסכים !</Button>
          <Button onClick={props.loudNews} style={{ direction: "rtl" }}>מסכים ! המשך ..</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
