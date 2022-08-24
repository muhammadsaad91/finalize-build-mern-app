import React from "react";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

const App = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    const Aboutcall = async () => {
        try {
            const response = await fetch("/welcom", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            const data = await response.json();
            console.log(data);
            setData(data);

            if (response.status === 200) {
                console.log("success");
                navigate("/about");
            }
            else {
                navigate("/login");
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        Aboutcall();
    }, []);

    return (

        <div className="form-item">
            <div className="form-wrapper">
                <h1>Welcome {data.name}</h1>
                <div className="data">
                    <h5>Your Contact Number is: {data.phonenumber}</h5>
                    <h5>Your Email is: {data.username}</h5>
                </div>
            </div>
        </div>
    );
}
export default App;
