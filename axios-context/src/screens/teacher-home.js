import React from "react";
import { useContext } from "react";
import {Link} from "react-router-dom";
import { GlobalContext } from "../context/context";
import { useHistory } from "react-router";

export default function Teacher(){
   let history =  useHistory();


   const {state , dispatch} =  useContext(GlobalContext);

   let {userName} = state.authUser;
 


   const logout = ()=>{
       dispatch({type:"SIGN_OUT" , payload: {}});
       history.push('/')



   }


    return(
        <div>
            <nav>
            <ul>
                <li>
                    <Link to='/addstudent'>Add Student</Link>
                   
                </li>
                <li>
                <Link to='/allstudents'>Students List</Link>
                </li>
                
            </ul>
        </nav>


                <h1>Hello {userName}</h1>   

            <button onClick={logout}>Logout</button>
            
        </div>
    )
    
}