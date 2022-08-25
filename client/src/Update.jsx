import React from "react";
import { useState } from "react";
import { Usercontext } from "./App";
import { useNavigate } from "react-router-dom";


const App = () => {
    const navigate = useNavigate();
    const { state, dispatch } = React.useContext(Usercontext);
    const [user, setUser] = useState({
        password: "",
        confirmpassword: "",
    });
    const { password, confirmpassword } = user;
    const Change = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const postdata = async (e) => {
        e.preventDefault();
        const data = {
            password,
            confirmpassword,
        };
        if (data.password.length < 5) {
            alert("Password must be atleast 5 characters");
            return;
        }
        if (data.password !== data.confirmpassword) {
            alert("Password does not match");
            return;
        }
        const response = await fetch("/update", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const jsonData = await response.json();
        console.log(jsonData);
        dispatch({type: "USER"
        , payload: true});
        if (jsonData.msg === "Please Fill all fields"){
            alert("Please Fill all fields");
            return;
        }
        
        else if (jsonData.msg === "Password updated") {
            alert("Password updated successfully");
            navigate("/about");
            return;
        }
        else if (jsonData.msg === "Passwords does not match") {
            alert("Passwords does not match");
            return;
        }
    
        else{
            alert("Something Went Wrong");
            return;
        }
    }

    return (
    <>
            <div className="form-wrapper registerpage">

                <h3>Password Update</h3>
                <form method="PUT">

                        
                        <div className="form-item">
                            <input type="password" value={user.password} name="password" required="required" onChange={Change} placeholder="Password" ></input>
                        </div>

                        <div className="form-item">
                            <input type="password" value={user.confirmpassword} name="confirmpassword" required="required" onChange={Change} placeholder="Confirm Password" ></input>
                        </div>
                 </form>
                 <div className="button-panel">
                {/* <NavLink to={'/'}> */}
                    <button type="submit" className="button" onClick={postdata}>Update Password</button>
                    {/* </NavLink> */}
                </div>
                     </div>
                    </>
                    );
}

                    export default App;