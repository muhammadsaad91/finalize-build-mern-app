import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const App = () => {
    const navigate = useNavigate();

     const clicked = async () => {
        fetch("/logout", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then(response => {
            navigate("/login" , {replace: true});
            if (response.status === 200) {
                alert("Logout Successfully");
            }
        }).catch(error => {
            console.log(error);
        });
    }

     useEffect(() => {
        clicked();
    } , []);

    return (
        <div className="logout">
           <button onClick={clicked}>Logout</button>
        </div>
    );
}
export default App;