import "./App.css";
import { useState } from "react";
// import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const header = "Enter text here";
  const [mode, setMode] = useState("light"); // holds the current theme mode ("light" or "dark")
  const [alert, setAlert] = useState(null); // holds the current alert message

  /**
   *
   * @param {string} word
   * @returns capitalised word (1st letter uppercase, rest lowercase)
   */
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 1500); // auto-dismiss after 1.5s
  };

  /**
   * @description Toggles the theme mode between "light" and "dark" for the application
   */
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", capitalize("success"));
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#02112d";
      showAlert("Dark mode has been enabled", capitalize("success"));
    }
  };
  return (
    <>
      <Navbar title="TextUtils" toggleMode={toggleMode} mode={mode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Router> */}
        {/* <Routes> */}
        {/* <About mode={mode} /> */}
        <TextForm showAlert={showAlert} heading={header} mode={mode} />
        {/* </Routes> */}
        {/* </Router> */}
      </div>
    </>
  );
}

export default App;
