import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Illustration from "./components/Illustration";
import MainView from "./components/MainView";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
  }
`;

function App() {
  const [theme, setTheme] = useState({
    primary: "#20c997",
    background: "#a6ca63",
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router basename={"psychic-winner"}>
        <div
          className={
            "app container-fluid d-flex flex-column p-3 px-md-3 py-md-4"
          }
        >
          <div className={"app-wrapper"}>
            {/*Header*/}
            <Header setTheme={setTheme} />

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
    </ThemeProvider>
  );
}

export default App;
