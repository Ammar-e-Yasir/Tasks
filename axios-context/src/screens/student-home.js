import React from "react";
import { useContext } from "react";
import { useHistory } from "react-router";
import { GlobalContext } from "../context/context";


export default function Student(){
  let history = useHistory();
    const {state ,dispatch} = useContext(GlobalContext);
    let {userName} = state.authUser;

    const logout = ()=>{
        let signOut = state.authUser;
        dispatch({type:"SIGNOUT" , payload:{}});
        history.push('/');
    }

    
    
    return(
        
        state.allStudentData.map(({studentName,rollNo,obtainedMarks,totalMarks,grade,feedBack})=>{
            if(userName === studentName){
            return(
        <div>
        <h1>Name : {userName}</h1>
        <h3>Roll Number : {rollNo}</h3>
        <p>Obtained Marks :{obtainedMarks}</p>
        <p>Total Marks :{totalMarks}</p>
        <p>Grade : {grade}</p>
        <p>Remarks :{feedBack}</p>

        <button onClick={logout}>logout</button>
        </div>
            )
            }

})
    )
}