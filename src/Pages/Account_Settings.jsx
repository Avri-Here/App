import { useState } from "react";
import DeleteAc from "./Account_Settings/DeleteAc";
import ChangeMyPassword from "./Account_Settings/ChangeMyPassword";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React from 'react';
const axios = require("axios").default;
export default (props) => {
  return (
    <>
      <h1 style={{ textAlign: "center", direction: "rtl" }}>
        שנה את הגדרות החשבון ..
      </h1>
      <hr/>
      <br />
      <br />
      <Grid item xs={12}>
        <Grid container justifyContent="space-evenly">
          <DeleteAc reducer={props.reducer} />
          <br />
          <ChangeMyPassword />
        </Grid>
      </Grid>
    </>
  );
};
