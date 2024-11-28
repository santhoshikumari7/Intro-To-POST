import { application } from 'express';
import React from 'react'
import {useRef} from "react"

function Signup() {

    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();
    let ageInputRef = useRef();
    let emailInputRef = useRef();
    let passwordInputRef = useRef();
    let mobileNoInputRef = useRef();
    let profilePicInputRef = useRef();

    let onSubmitUsingJSON = async ()=>{

        let dataToSend = {
            firstName:firstNameInputRef.current.value,
            lastName:lastNameInputRef.current.value,
            age:ageInputRef.current.value,
            email:emailInputRef.current.value,
            password:passwordInputRef.current.value,
            mobileNo:mobileNoInputRef.current.value,
            profilePic:profilePicInputRef.current.value,
        };

        let dataToSendJSON = JSON.stringify(dataToSend)

        let myHeader = new Headers();
        myHeader.append("content-type","application/json");

        let reqOptions = {
            method:"POST",
            body:dataToSendJSON,
            headers:myHeader,

        };

        let JSONData = await fetch("http://localhost:4567/signup",reqOptions);

        let JSOData = await JSONData.json();
        
        console.log(JSOData);
        alert(JSOData.msge);

    };


 return (
    <form>
    <div>
      <h2>Signup</h2>
      <div>
        <label>First Name</label>
        <input ref={firstNameInputRef}></input>
        </div>
        <div>
        <label>Last Name</label>
        <input ref={lastNameInputRef}></input>
        </div>
        <div>
        <label>Age</label>
        <input ref={ageInputRef}></input>
        </div>
        <div>
        <label>Email</label>
        <input ref={emailInputRef}></input>
        </div>
        <div>
        <label>Password</label>
        <input ref={passwordInputRef}></input>
        </div>
        <div>
        <label>Mobile No</label>
        <input ref={mobileNoInputRef}></input>
        </div>
        <div>
        <label>Profile Pic</label>
        <input ref={profilePicInputRef}></input>
        </div>
        <div>
            <button type="button" onClick={()=>{
                onSubmitUsingJSON();
            }}>Submit</button>
        </div>

    </div>
    </form>


   
  )
}

export default Signup
