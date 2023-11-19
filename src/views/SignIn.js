import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';

import 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();
   
    const signIn = () => {
       initializeApp.auth()
         .signInWithEmailAndPassword(email, password)
         .then(() => {
           history.push('/homepage');
         })
         .catch((error) => {
           console.log(error);
         });
    };
   
    return (
       <div>
         <h1>Sign In</h1>
         <input
           type="email"
           placeholder="Email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
         />
         <input
           type="password"
           placeholder="Password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
         />
         <button onClick={signIn}>Sign In</button>
         <p>
           Don't have an account? <Link to="/Login">Sign Up</Link>
         </p>
       </div>
    );
   };
   
   export default SignIn