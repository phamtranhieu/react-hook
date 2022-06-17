import React from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import logo from "./logo.svg";
import "./App.css";
import FormAntd from "./pages/FormAntd";
import Begin from "./pages/Begin";

function App() {
  return (
    <div className="App">
      <FormAntd />
      {/* <Begin /> */}
    </div>
  );
}

export default App;
