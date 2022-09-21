// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useReducer, useState, createContext } from "react";
import PrimarySearchAppBar from "./Pages/App Bar";

import SignUp from "./Pages/Sign up";
import SignIn from "./Pages/Sign In";
import HomePage from "./Pages/HomePage";
import Account_Settings from "./Pages/Account_Settings";
import Chat from "./Pages/Chat";
const UserContext = createContext();

// import NoPage from "./pages/NoPage";
const initialState = { userName: "", showNav: false };

function reducer(state, action) {
  switch (action.type) {
    case "setUserName":
      return { userName: action.name };
    case "showNav":
      return { showNav: true };
    default:
      throw new Error();
  }
}

export default function Router() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <UserContext.Provider user={state.userName} setshowNav={dispatch} >
        {/* <Component2 user={user} /> */}

        {state.showNav && <PrimarySearchAppBar />}

        <BrowserRouter>
          <br />
          <br />
          <Routes>
            <Route path="" element={<SignIn setName={dispatch} />} />
            <Route path="Sign-Up" element={<SignUp />} />
            <Route path="Sign-In" element={<SignIn reducer={dispatch} />} />
            <Route
              path="HomePage"
              element={<HomePage name={state.userName} setName={dispatch} />}
            />
            <Route
              path="ChatHere"
              element={<Chat name={state.userName} setName={dispatch} />}
            />
            <Route
              path="Account_Settings"
              element={
                <Account_Settings name={state.userName} setName={dispatch} />
              }
            />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}
