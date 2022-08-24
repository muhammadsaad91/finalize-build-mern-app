import React from "react";
import "./index.css";
// import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';



const Signup = () => {
     const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        username: "",
        phonenumber: "",
        password: "",
        confirmpassword: ""
    });

    const { name, username,phonenumber, password , confirmpassword } = user;

    const Change = (e) => {
        //  console.log(e.target.value);
        //  console.log(e.target.name);
        //  console.log(e);
 
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    
    const postdata = async (e) => {
        
        e.preventDefault();
        const data = {
            name,
            username,
            phonenumber,
            password,
            confirmpassword,
        };

        if (data.username.endsWith(".com")) {

            if(data.password.length < 5){
                alert("Password must be atleast 5 characters");
                return;
            }
            if (data.phonenumber.length !== 10) {
                alert("This is not valid phone number");
                return;
            }

        const response = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const jsonData = await response.json();
        console.log(jsonData);
        if (jsonData.msg === "User created") {
            alert("User created successfully");
            navigate("/login");
        }
         else if (jsonData.msg === "Please enter all fields") {
            alert("Please filled all the fields");
        }
        else if (jsonData.msg === "Passwords do not match"){
            alert("Passwords do not match");
        }
        else {
            alert("User already exists");
        }


    }
    else {
        alert("Please enter a valid email");
    }
}
    return (
        <>

            <div className="form-wrapper registerpage">

                <h3>Register here</h3>
               <form method="POST">


               <div className="form-item">
                    <input type="text" value={user.name} name="name" required="required" onChange={Change} placeholder="Name"   ></input>
                </div>
                <div className="form-item">
                    <input type="text" value={user.username} name="username" required="required" onChange={Change} placeholder="Username" ></input>
                </div>

                <div className="form-item">
                    <input type="text" value={user.phonenumber} name="phonenumber" required="required" onChange={Change} placeholder="Phone number" ></input>
                </div>

                <div className="form-item">
                    <input type="password" value={user.password} name="password" required="required" onChange={Change} placeholder="Password" ></input>
                </div>

                <div className="form-item">
                    <input type="password" value={user.confirmpassword} name="confirmpassword" required="required" onChange={Change} placeholder="Confirm Password" ></input>
                </div>


                
                <div className="button-panel">
                {/* <NavLink to={'/'}> */}
                    <button type="submit" className="button" onClick={postdata}>Sign up</button>
                    {/* </NavLink> */}
                </div>
                <div className="reminder">
                </div>


               </form>

            </div>
        </>
    );
}
export default Signup;
