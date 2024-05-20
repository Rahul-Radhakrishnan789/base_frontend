import React from "react";
import { Routes, Route } from "react-router-dom";
import SignInPage from "./pages/signInPage";
import UploadPage from "./pages/mainPage";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={< SignInPage/>} />
        <Route path='/mainpage' element={<UploadPage/>} />
      </Routes>
    </>
  );
}

export default App;
