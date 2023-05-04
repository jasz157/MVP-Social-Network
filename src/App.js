import React from "react";
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Login from "./pages/Login/Login";
import Feed from "./pages/Feed/Feed";
import ForgotPassword from "./pages/ForgotPassword/Index";
import SignUp from "./pages/SignUp/Index";


export default function App () {
    return(

        <Router>
            <Routes>
                <Route path='/' element={<Login/>}></Route>
                <Route path="/feed" element={<Feed/>}></Route>
                <Route path="/forgotPassword" element={<ForgotPassword/>}></Route>
                <Route path="/signup" element={<SignUp/>}></Route>
            </Routes>
        </Router>
    ) 
}