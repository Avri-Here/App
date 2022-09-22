import { useState } from "react";
import DeleteAc from "./Account_Settings/DeleteAc";
import ChangeMyPassword from "./Account_Settings/ChangeMyPassword";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
const axios = require("axios").default;
export default () => {
  return (
    <>
      <h1 style={{ textAlign: "center", direction: "rtl" }}>
        שנה את הגדרות החשבון
      </h1>
        <Grid item xs={12}>
          <Grid container justifyContent="space-evenly">
            <DeleteAc />
            <br/>
            <ChangeMyPassword />
          </Grid>
        </Grid>
    </>
  );
};
