import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Product from "./Product.jsx";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { useState, useEffect, useRef } from "react";

export default function RowAndColumnSpacing() {
  const [arr, setArr] = useState(null);
  const [addToCart, setaddToCart] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        setArr(res.products);
      });
  }, []);
  useEffect(() => {
    console.log("arr = ", arr);
  }, [arr]);
  return (
    <div id="alla">
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {arr && (
            <>
              {arr.map((item, index) => {
                console.log(item);
                return (
                  <Grid xs={3} key={index}>
                    <Product
                      key={index}
                      item={item}
                      setaddToCart={setaddToCart}
                    />
                  </Grid>
                );
              })}
            </>
          )}
        </Grid>
      </Box>
    </div>
  );
}
