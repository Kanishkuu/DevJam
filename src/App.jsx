import { Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Layout from "./Layout";
import RegisterPage from "./pages/RegisterPage";


function App() {
  

  return (
    <Routes>
      <Route path="/" element = {<Layout/>}> 
       <Route path="/" element = {<HomePage/>}/>
       <Route path="/login" element = {<LoginPage/>}/>
       <Route path="/register" element = {<RegisterPage/>}/>
      </Route>
      
    </Routes>
    
  )
}

export default App
