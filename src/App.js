import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";
import { ToastContainer } from "react-toastify";
import Box from "@mui/material/Box";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

////////// Custom Components
import Routes from "./routes/Router";
import Swan_Appbar from "./Swan_Components/SwaN_Appbar/Swan_Appbar";
import SwaN_Sidebar from "./Swan_Components/SwaN_Sidebar/SwaN_Sidebar";
import SwaN_Card from "./Swan_Components/SwaN_Card/SwaN_Card";
const App = () => {
  const routing = useRoutes(Routes);
  const [activeMenuItem, setActiveMenuItem] = useState("");
  return (
    <ProSidebarProvider>
      <Box sx={{ width: "100%", display: "flex" }}>
        <ToastContainer />
        <SwaN_Sidebar
          activeMenuItem={activeMenuItem}
          setActiveMenuItem={setActiveMenuItem}
        />
        <div style={{ display: "block", width: "100%", margin: "10px" }}>
          <Swan_Appbar activeMenuItem={activeMenuItem} />
          <SwaN_Card />
          <div>{routing}</div>
        </div>
      </Box>
    </ProSidebarProvider>
  );
};

export default App;
