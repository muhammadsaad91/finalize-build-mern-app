import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();

 const [user, setUser] = useState({
  username: "",
  password: "",
  });

  const Change = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

const checkuser = async (e) => {
  e.preventDefault();
  const data = {
    username: user.username,
    password: user.password,
  };
  const response = await fetch("/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const jsonData = await response.json();
  console.log(jsonData);
  if (response.status === 200) {
    alert("Login Successful");
    navigate("/");
  } else {
    alert("Invalid credentials  ");
    navigate("/login");
  }
}

     

    return (
<>


<div className="form-wrapper">
  
    <h3>Login here</h3>
	<form action="" method="POST">
    
  <div className="form-item">
		<input  type="text" value={user.username} onChange={Change} name="username"  required="required" placeholder="Username" ></input>
    </div>
    
    <div className="form-item">
		<input type="password" value={user.password} onChange={Change} name="password"  required="required" placeholder="Password" ></input>
    </div>
    
    <div className="button-panel">

    <button type="submit" onClick={checkuser} className="button">Login</button>     

    </div>
  <div className="reminder">
    <p>Not a member?  <NavLink to={'/signup'}>Signup</NavLink> </p>
    <p><a href="#">Forgot password?</a></p>
  </div>
  
  </form>

  </div>
</>
    );
    }
export default Login;