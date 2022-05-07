import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Header from "./components/common/header/Header";
import { useLocation } from "react-router-dom";
import "@fontsource/roboto";

function App() {
  const [title, setTitle] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const parsedTitle = location.pathname.replace(/\W/g, " ");
    setTitle(parsedTitle);
  }, [location]);

  return (
    <Grid container>
      <Navbar />
      <Header title={title} />
      <Outlet />
    </Grid>
  );
}

export default App;
