import React from "react";
import { useState } from "react";
// import { useEffect } from "react";

const App = () => {
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
        if (jsonData.status === "success") {
            alert("Password updated successfully");
            return;
        }

        if (jsonData.status === "fail") {
            alert("Password update failed");
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