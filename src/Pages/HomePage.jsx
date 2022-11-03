import React from 'react';
import { useNavigate } from "react-router-dom";
import imgChat from "../Img/Chat.jpg";
import imgShop from "../Img/Shop.jpg";
import TodoMain from "../Img/TodoMain.jpg";
import FileUploadImg from "../Img/cloud-upload.jpg";
import News from "../Img/News.jpg";
export default () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 dir="rtl" style={{ textAlign: "center" }}>
        לאן מתקדמים מכאן ?
      </h1>
      <hr />
      <br />
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                style={{
                  width: "18rem",
                  height: "12rem",
                  backgroundSize: "cover",
                  float: "left",
                }}
                src={imgChat}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 dir="rtl" className="card-title">
                  התחל לשוחח !
                </h5>
                <p dir="rtl" className="card-text">
                  Chat ומרחבים עוזרים לצוותים לשתף פעולה מכל מקום ובאופן שמאפשר
                  גמישות ויעילות, קבל התראה בזמן אמת בעת קבלת הודעה חדשה ..
                </p>
                <a href="ChatHere" className="btn btn-primary">
                  Mone On !
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={News}
                style={{
                  width: "18rem",
                  height: "12rem",
                  backgroundSize: "cover",
                  float: "left",
                }}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 dir="rtl" className="card-title">
                  קבל מבזקי חדשות !
                </h5>
                <p dir="rtl" className="card-text">
                  "חדשות עכשיו" מרכז חדשות עדכניות ומבזקים מאתרי החדשות הטובים
                  ביותר 24 שעות ביממה, החדשות מופיעות בזמן אמת ובתצוגה נוחה !
                </p>
                <a href="News" className="btn btn-primary">
                  Mone On !
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                style={{
                  width: "18rem",
                  height: "12rem",
                  backgroundSize: "cover",
                  float: "left",
                }}
                src={FileUploadImg}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 dir="rtl" className="card-title">
                  שתף את הקבצים בבעלותך !
                </h5>
                <p className="card-text" dir="rtl">
                  תוכן שמור בענן הוא הפתרון הטוב ביותר למניעת אובדן חומר חשוב,
                  צוות האתר מאפשר העלאת קבצים מכל סוג , אנו ממליצים לגבות את זה
                  כאן ..
                </p>
                <a href="FileUploadPage" className="btn btn-primary">
                  Mone On !
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                style={{
                  width: "18rem",
                  height: "12rem",
                  backgroundSize: "cover",
                  float: "left",
                }}
                src={TodoMain}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 dir="rtl" className="card-title">
                  נהל את המשימות שלך !
                </h5>
                <p className="card-text" dir="rtl">
                  סדר וארגון יעזור לך לנהל את המשימות והפעולות לך בצורה נבונה
                  ומהירה, תוכל להוסיף מטלה חדשה ולקבל תזכורת כאן, בחלון ההתראות
                  !
                </p>
                <a href="TodoList" className="btn btn-primary">
                  Mone On !
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </>
  );
};
