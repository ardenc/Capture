import React from "react";
//Global Styles
import GlobalStyle from "./components/GlobalStyle";
//import of pages
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
