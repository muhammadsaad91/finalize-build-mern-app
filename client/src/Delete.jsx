import React from "react";
import { useEffect } from "react";
import { Usercontext } from "./App";
import { useNavigate } from "react-router-dom";


const App = () => {
    const navigate = useNavigate();
    const {state, dispatch} = React.useContext(Usercontext);
    const deleteAccount = async () => {
    let confirm = window.confirm("Are you sure you want to DELETE your account? Permanently  ?");
         if (confirm) {
    fetch("/delete", {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        credentials: "include"
    }).then(response => {
        if (response.status === 200) {
            dispatch({type: "USER"
            , payload: false});
            // window.location.href = "/login";
        }
    }).catch(error => {
        console.log(error);
    });
    }
    else {
           navigate("/", {replace: true});   
    }
}
    useEffect (() => {
     deleteAccount();   
   } , []);
}

export default App;
