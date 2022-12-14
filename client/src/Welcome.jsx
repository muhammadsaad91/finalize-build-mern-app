import React from "react";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { Usercontext } from "./App";

const App = () => {
    const {state, dispatch} = React.useContext(Usercontext);
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
                    dispatch({type: "USER"
                    , payload: true});
                    navigate("/");
                }
               else{
                navigate("/login");
               }
            } catch (error) {
                console.log(error);
                // navigate("/login");
            }
    }

    useEffect(() => {
        Aboutcall();
    } , []);





    return (
        <div className="form-wrapper">
            <h1>Welcome  {data.name}</h1>
        </div>
    );
}
export default App;
