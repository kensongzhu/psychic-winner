import React from "react";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main";

function App() {
  return (
    <Router>
      <div className={"container-fluid d-flex flex-column wrapper p-0"}>
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
