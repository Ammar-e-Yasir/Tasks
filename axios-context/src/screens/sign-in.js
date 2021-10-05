import React, { useContext} from "react";
import { useHistory } from "react-router";
import { useState } from "react/cjs/react.development";
import { GlobalContext } from "../context/context";

export default function SignIn(){
    
    const[email , setUserEmail] = useState('');
    const[password , setUserpass] = useState('');
    const[emailErr , setEmailError] = useState('');
    const[passErr , setPasswordError] = useState('');
    const {state , dispatch} = useContext(GlobalContext);
    



    let history =  useHistory();

    function loginUser(email,password){
        let  userData = state.users;
        userData.forEach((user)=>{
            if(user.email === email && user.password === password){
            dispatch({type : "LOGIN_USER" , payload : user });

            if(user.role === 'trainer'){
                history.push('/teacher-home')
            }
            else if(user.role ==='student'){
                history.push('/student-home')
            }
    
        }
        
    })    

    }

    // useEffect(()=>{
    //     console.log('Auth User !')
    // },[state])

    return(
        <div>
            <fieldset>
                <legend>Login User</legend>

        <label style={{display:'inline-block',width:'80px'}}>Email</label>
        <input type='email' value={email} onChange={(e) => { setUserEmail(e.target.value) }} />
        <br />
        <span style={{display:'block',backgroundColor:'pink',color:'red',margin:'5px 0px'}}>{emailErr}</span>
        <label style={{display:'inline-block',width:'80px'}}>Password</label>
        <input type='password' value={password} onChange={(e) => { setUserpass(e.target.value) }} />
        <br/>
        <span style={{display:'block',backgroundColor:'pink',color:'red',margin:'5px 0px'}}>{passErr}</span>

        <br/>
                <button onClick={()=>{
                     if(email === ""){
                        setEmailError('Enter your Email !');
                        setTimeout(()=>{
                          setEmailError('');
                        },3000)
                    }
                    else if(password === ""){
                        setPasswordError('Enter your Password !');
                        setTimeout(()=>{
                            setPasswordError('');
                          },3000)
                    }
                    else if (email !== "" && password !== ""){
                    loginUser(email , password)
                    }

                }}>Login</button>
            </fieldset>

{/* {console.log(Object.entries)} */}


    </div>
            )
}
