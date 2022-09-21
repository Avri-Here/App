import { useState } from "react";
import DeleteAc from "./Account_Settings/DeleteAc";
import ChangeMyPassword from "./Account_Settings/ChangeMyPassword";
const axios = require("axios").default;
export default () => {
  return (
    <>
      <h1 style={{ textAlign:"center", direction:"rtl" }}>
        שנה את הגדרות החשבון 
      </h1>
      <div id="allDivsett">
        <DeleteAc />
        <ChangeMyPassword />
      </div>
    </>
  );
};
