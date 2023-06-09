import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Accordion from "./components/Accordion";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";



function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  // const removeBodyClasses=()=>{
  //   document.body.classList.remove("bg-light");
  //   document.body.classList.remove("bg-dark");
  //   document.body.classList.remove("bg-primary");
  //   document.body.classList.remove("bg-danger");
  //   document.body.classList.remove("bg-success");
  //   document.body.classList.remove("bg-info");
  // }
  const darkModeToggle = () => {
    // removeBodyClasses();
    // console.log(cls);
    // document.body.classList.add("bg-"+cls)
    // let form_check_label = document.querySelector(".form-check-label");
 
    if (mode === "light") {
      setMode("dark");
      // form_check_label.classList.add("text-light")
      // form_check_label.innerHTML = "Disable dark mood";
      document.body.style.backgroundColor = "#071031";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils/Dark-mood";
      // setInterval(() => {
      //   document.title="Install TextUtils"
      // }, 1500);
      // setInterval(() => {
      //   document.title="Click here to get $1000"
      // }, 2000);
    } else {
      setMode("light");
      // form_check_label.classList.remove("text-light")
      // form_check_label.innerHTML = "Enable dark mood";
      document.body.style.backgroundColor = "#d6d6d685";
      showAlert("Dark mode has been disabled", "success");
      // document.title = "TextUtils";
    }
  };

  return (
    <>
      <Router>
        <Navbar mode={mode} darkModeToggle={darkModeToggle} />
        <Alert alert={alert} />
        {/* <Navbar title="TextUtils" nav_link_1="Home" nav_link_2="About Us"/> */}
        <div className="container my-4">
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  heading="Try TextUtils - Word counter, Character counter, Copy text"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
            <Route path="/about" element={<Accordion mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
