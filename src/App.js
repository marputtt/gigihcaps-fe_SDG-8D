import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Homepage from "./views/homepage";
import Login from './views/Login';
import SignUp from "./views/Login";
import SignIn from "./views/SignIn";
import RegisterAndLogin from "./views/Login";

const App = () => { 
    return ( 
        <BrowserRouter>
        <div>
            <Routes>
                <Route path="/" element={<RegisterAndLogin />} />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/Home" element={<Homepage />} />
            </Routes>
        </div>
        </BrowserRouter>
    )


}

export default App