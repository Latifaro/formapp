
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Result from "./Result";

function App() {
  return (
    <>
      <Router>
        <Routes>
       
          <Route path="/" element={<Step1 />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
