import React from "react";
import Signup from "./Signup";
import Login from "./Login";
import Welcome from "./Welcome";
import { Routes , Route } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import Logout from "./Logout";
import { createContext } from "react";
import { initialState , reducer  } from "./UseReducer";

export const Usercontext = createContext();

 const App = () => {
  const [ state , dispatch ] = React.useReducer(reducer , initialState);
  return (<>
     <Usercontext.Provider value={{state , dispatch}}>
      
  <Navbar/>
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/about" element={<About/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route path="/logout" element={<Logout/>} />
    </Routes>
</Usercontext.Provider>
    </>
  );
}



export default App;