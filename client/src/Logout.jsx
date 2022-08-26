import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Usercontext } from "./App";


const App = () => {
     const {state, dispatch} = React.useContext(Usercontext);
    const navigate = useNavigate();

     const clicked = async () => {
           let confirm = window.confirm("Are you sure you want to logout?");
              if (confirm) {            
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
                dispatch({type: "USER"
                , payload: false});
                // alert("Logout Successfully");
            }
        }).catch(error => {
            console.log(error);
        });
    
            }
            else {
                 window.history.back();
            }

    }

     useEffect(() => {
        if (!state){
            navigate("/login");
        }
        else {
        clicked();
        }
    } , []);

}
export default App;