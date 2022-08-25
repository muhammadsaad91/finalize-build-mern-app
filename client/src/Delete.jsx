import React from "react";
import { useEffect } from "react";
import { Usercontext } from "./App";

const App = () => {
    const {state, dispatch} = React.useContext(Usercontext);
    const deleteAccount = async () => {
    let confirm = window.confirm("Are you sure you want to delete your account?");
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
            window.location.href = "/login";
        }
    }).catch(error => {
        console.log(error);
    });
    }
    else {
            window.history.back();
    }
}
    useEffect (() => {
     deleteAccount();   
   } , []);
}

export default App;
