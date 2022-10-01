import { Button } from "@mui/material";
import React from "react";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <h1>Reactflix app :D</h1>
      <Button variant="contained" color="success">
        Click me!
      </Button>
    </Layout>
  );
}

export default App;
