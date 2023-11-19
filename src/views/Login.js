import React, { useState } from "react";
import { database } from "../FirebaseConfig";
import { initializeApp } from "firebase/app";
import "./Login.css"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

import { useNavigate } from "react-router-dom";
function RegisterAndLogin() {
  const [login, setLogin] = useState(false);

  const history = useNavigate();

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (type == "signup") {
      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/home");
        })
        .catch((err) => {
          alert(err.code);
          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/home");
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };

  const handleReset = ()=>{
    history("/reset");
  }

  return (
    <div className="App">
      {/* Registration and login Screen */}
      


      <div className="app-container">
      <div className="app-container1">
      <div className="row">
        <button
          className={login == false ? "activeColor" : "pointer"}
          onClick={() => setLogin(false)}
        >
          SignUp
        </button>
        <button
          className={login == true ? "activeColor" : "pointer"}
          onClick={() => setLogin(true)}
        >
          SignIn
        </button>
      </div>
      
        <div className="app-login-page">
      
            
            
          
          

          <h1 className="app-form-title">

          {login ? "SignIn" : "SignUp"}

          </h1>
          
          


          <form className="app-form" onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}>
            <div className="app-password-input">
              <span className="app-text14">
                <span>Password</span>
              </span>
              <input
                type="password"
                id="password"
                name='password'
                required
                maxlength="10"
                minlength="6"
                placeholder="Enter your Password here"
                className="app-textinput input"
              />
            </div>
            <div className="app-email-input">
              <span className="app-text16">
                <span>Email</span>
              </span>
              <input
                type="email"
                id="email"
                name='email'
                required
                placeholder="Enter your Email here"
                className="app-textinput1 input"
              />
            </div>
            <div className="app-full-name-input">
              <span className="app-text18">
                <span>Full Name</span>
              </span>
              <input
                type="text"
                required
                placeholder="Enter your Name here"
                className="app-textinput2 input"
              />
              <button className="app-button button">{login ? "SignIn" : "SignUp"}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
export default RegisterAndLogin;
