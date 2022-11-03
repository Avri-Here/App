// import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import { useReducer, useState, useEffect } from "react";
import PrimarySearchAppBar from "./Pages/App Bar";

import SignUp from "./Pages/Sign up";
import SignIn from "./Pages/Sign In";
import HomePage from "./Pages/HomePage";
import Account_Settings from "./Pages/Account_Settings";
import Chat from "./Pages/Chat";
import FileUploadPage from "./Pages/FileUploadPage";
import News from "./Pages/News";
import TodoList from "./Pages/TodoList";
import { SendMeEmail } from "./Pages/SendMeEmail";
import { useNavigate } from "react-router-dom";

// import NoPage from "./pages/NoPage";

const axios = require("axios").default;
const initialState = {
  userName: "",
  showNav: true,
  NotificationsIconAlertNav: 0,
  AddNotificationsIconAlertNav: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "setUserName":
      return { ...state, userName: action.name };
    case "showNav":
      return { ...state, showNav: action.showNav };
    case "NotificationsIconAlertNav":
      return {
        ...state,
        NotificationsIconAlertNav:
          action.NotificationsIconAlertNav + state.NotificationsIconAlertNav,
      };
    case "ClearNotificationsIconAlertNav":
      return {
        ...state,
        NotificationsIconAlertNav: action.ClearNotificationsIconAlertNav,
        AddNotificationsIconAlertNav: [],
      };
    case "AddNotificationsIconAlertNav":
      return {
        ...state,
        AddNotificationsIconAlertNav: [
          ...state.AddNotificationsIconAlertNav,
          action.AddNotificationsIconAlertNav,
        ],
      };
    default:
      return;
  }
}

export default function Router() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .post("http://https://sure-cook-production.up.railway.app/checkAuth", {
        token: localStorage.getItem("token"),
      })
      .then(() => {
        if (
          window.location.href === "http://localhost:3000/Sign-In" ||
          window.location.href === "http://localhost:3000/"
        ) {
          dispatch({ type: "showNav", showNav: true });
          navigate("/HomePage");
        }
      })
      .catch(() => {
        navigate("/Sign-In");
      });
  }, [state]);

  return (
    <>
      {state.showNav && (
        <PrimarySearchAppBar reducer={dispatch} stateGlobal={state} />
      )}
      <br />
      <br />

      <Routes>
        <Route path="Sign-Up" element={<SignUp />} />
        <Route path="" element={<SignIn reducer={dispatch} state={state} />} />
        <Route
          path="Sign-In"
          element={<SignIn reducer={dispatch} state={state} />}
        />
        <Route path="HomePage" element={<HomePage name={state.userName} />} />
        <Route
          path="TodoList"
          element={<TodoList reducer={dispatch} state={state} />}
        />
        <Route path="ChatHere" element={<Chat name={state.userName} />} />
        <Route path="FileUploadPage" element={<FileUploadPage />} />
        <Route path="News" element={<News />} />
        <Route
          path="Account_Settings"
          element={<Account_Settings name={state.userName} />}
        />
        <Route path="SendMeEmail" element={<SendMeEmail />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </>
  );
}
