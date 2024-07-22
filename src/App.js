import React from "react";
import ReactDom from "react-dom/client"
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./index.css"
import { useState } from "react";
import Landing from "./pages/Landing";


function App()
{
  
    const [users, setUsers] = useState([
        {
            name: "john",
            password: "123"
        }
    ])
    

   
  return (
<>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login users={users} setUsers={setUsers}></Login>}></Route>
                <Route path="/signup" element={<Signup users={users} setUsers={setUsers}></Signup>}></Route>
                <Route path="/landing"  element={<Landing></Landing>}></Route>
            </Routes>
        </BrowserRouter>
    </>

    )
}

export default App;
