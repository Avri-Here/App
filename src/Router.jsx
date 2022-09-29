// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useReducer, useState } from "react";
import PrimarySearchAppBar from "./Pages/App Bar";

import SignUp from "./Pages/Sign up";
import SignIn from "./Pages/Sign In";
import HomePage from "./Pages/HomePage";
import Sale from "./Pages/Sale";
import Account_Settings from "./Pages/Account_Settings";
import Chat from "./Pages/Chat";

// import NoPage from "./pages/NoPage";
const initialState = { userName: "", showNav: false };

function reducer(state, action) {
  switch (action.type) {
    case "setUserName":
      return { userName: action.name };
    case "showNav":
      return { showNav: action.showNav };
    default:
      return state.showNav;
  }
}

export default function Router() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      {state.showNav && <PrimarySearchAppBar reducer={dispatch} />}
      <br />
      <br />
      <Routes>
        <Route path="" element={<SignIn reducer={dispatch} />} />
        <Route path="Sign-Up" element={<SignUp />} />
        <Route path="Sign-In" element={<SignIn reducer={dispatch} />} />
        <Route
          path="HomePage"
          element={<HomePage name={state.userName} setName={dispatch} />}
        />
        <Route path="Sale" element={<Sale />} />
        <Route
          path="ChatHere"
          element={<Chat name={state.userName} setName={dispatch} />}
        />
        <Route
          path="Account_Settings"
          element={
            <Account_Settings name={state.userName} reducer={dispatch} />
          }
        />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
      {/* </UserContext.Provider> */}
    </>
  );
}
