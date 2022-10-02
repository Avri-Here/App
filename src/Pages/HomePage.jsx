import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import imgChat from "../Img/Chat.jpg";
import imgShop from "../Img/Shop.jpg";
export default () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 style={{ textAlign: "center", fontFamily: "cursive" }}>
        {localStorage.getItem("UserName")} Wellcome !
      </h1>
      <br />
      <hr />
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img src={imgChat} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 dir="rtl" className="card-title">
                  התחל לשוחח !
                </h5>
                <p dir="rtl" className="card-text">
                  Chat ומרחבים עוזרים לצוותים לשתף פעולה מכל מקום ובאופן
                  שמאפשר גמישות ויעילות, מצ'אטים אישיים ועד שיחות קבוצתיות.
                  תוכלו לשמור על קשר עם האנשים שאיתם אתם עובדים באופן מאובטח,
                  ולשדרג את יכולות העבודה הקבוצתית באמצעות צ'אטים, משימות וקבצים
                  משותפים.
                </p>
                <a href="ChatHere" className="btn btn-primary">
                  Go !!
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img src={imgShop} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
