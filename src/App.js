import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Illustration from "./components/Illustration";
import MainView from "./components/MainView";

function App() {
  return (
    <Router basename={"psychic-winner"}>
      <div
        id={"app"}
        className={"container-fluid d-flex flex-column p-3 px-md-5 py-md-5"}
      >
        <div
          className={
            "app-wrapper position-relative d-flex flex-column bg-white flex-grow-1 px-3 px-md-6"
          }
        >
          {/*Header*/}
          <Header />

          {/*Main*/}
          <main
            className={
              "row justify-content-center align-items-center flex-grow-1"
            }
          >
            <Illustration />
            <MainView />
          </main>

          {/*Footer*/}
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
