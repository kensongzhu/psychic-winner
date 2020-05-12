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
        className={"app container-fluid d-flex flex-column p-3 px-md-3 py-md-4"}
      >
        <div className={"app-wrapper"}>
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
