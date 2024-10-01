import React from "react";
import { Header } from "./components/header";
import { Main } from "./components/main/main";

function App() {
  return (
    <>
      <div className="body">
        <div className="container">
          <Header />
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
