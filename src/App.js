import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import About from './components/About';
import React, { useState, useEffect } from 'react';
import Alert from './components/Alert';
import Notes from './components/Notes';



import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [notes, setNotes] = useState([]); // Added this line

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      document.title = "TextUtils   Dark Mode";
      setInterval(() => {
        document.title = "TextUtils  is Amazing";
      }, 2000);
      setInterval(() => {
        document.title = "Install TextUtils";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
      setInterval(() => {
        document.title = "TextUtils  is Amazing";
      }, 3000);
      setInterval(() => {
        document.title = "Install TextUtils";
      }, 3000);
    }
  };
  


// Use setNotes somewhere in your code
useEffect(() => {
    // Example: Update notes state after 5 seconds
    const timer = setTimeout(() => {
        setNotes(["Note 1", "Note 2", "Note 3"]);
    }, 5000);

    return () => clearTimeout(timer);
}, []);

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} notesCount={notes.length}/>
        <Alert alert={alert} />
        <div className="container-fluid my-3">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Try TextUtils - word counter, character counter, remove extra spaces"
                  mode={mode}
                />
              }
            />

            <Route exact path="/about" element={<About mode={mode}/>} />
            <Route
              exact
              path="/home"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to Analyze"
                  mode={mode}
                />
              }
              />
              <Route path="/notes"  element={<Notes mode={mode} />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
