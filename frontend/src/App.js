import React from "react";
import Signup from "./Signup";
import Login from "./Login";
import Welcome from "./Welcome";
import { Routes , Route } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";

 const App = () => {
  return (<>
  
  <Navbar/>
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/about" element={<About/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<Signup/>} />
    </Routes>
  </>
  );
}



export default App;