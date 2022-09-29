import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import img from "../Img/img_avatar.png";
export default () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 style={{ textAlign: "center", fontFamily: "cursive" }}>
        {localStorage.getItem("UserName")} Wellcome !
      </h1>
      
      <div className="container text-center">
        <div className="row row-cols-2">
          <div className="col">
            {" "}
            <div className="card" style={{ width: "18rem" }}>
              <img src={img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="ChatHere" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            {" "}
            <div className="card" style={{ width: "18rem" }}>
              <img src={img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="ChatHere" className="btn btn-primary">
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
