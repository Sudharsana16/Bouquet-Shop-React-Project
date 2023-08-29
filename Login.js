import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './Login.css';
import image from '../image/login.jpg';
import usericon from '../image/usericon.png';
import passwordicon from '../image/passwordicon.png';
import {Link,useNavigate} from 'react-router-dom';
import {URL_API} from '../URL';

function Login(){

    var loginnameregX=/([a-zA-Z]{5,15})/
    var loginpasswordregx=/([a-zA-Z0-9]{8,20})/

    const[apiData,setapiData]=useState([])
    const[loginname,setLoginname]=useState(" ")
    const[loginpassword,setLoginpassword]=useState(" ")
    const Navigate=useNavigate()
    const CallAPI=async()=>{
        const resp=await axios.get(URL_API)
        setapiData(resp.data)
    }
useEffect(()=>{
CallAPI()
},[])
    
const Login=()=>{
    apiData.map((e)=>{
        if(e.name===loginname && e.password===loginpassword){
            
            }
            })
if(loginname===""&&loginpassword===""){
    return alert ("Please give input details")
}
else if(!loginnameregX.test(loginname)){
    return alert ("username should be atleast 5 characters")
}
else if (!loginpasswordregx.test(loginpassword)){
    return alert("password should be atleast 8 characters")
}
else{
    Navigate('/Home')
}
}

    return( 
        
            <div className="head">
                <div className="Form">
                <div class="container">
                <div class="form">
                <h1>Sign In</h1>
                
                <div class="username">
                <label><i><img src={usericon} alt=""></img></i></label>
                <input type='text' name="Username" placeholder="Username" value={loginname}
                onChange={(e)=>setLoginname(e.target.value)}></input>
                </div>
                <div class="password">
                 <label><i><img src={passwordicon} alt=""></img></i></label>
                <input type='text' name="password" placeholder="Password" value={loginpassword}
                onChange={(e)=>setLoginpassword(e.target.value)}></input>
                </div>
                <div class="label">
                    <input type="checkbox" className="custom-control-input"></input>
                    <label className="custom-control-label">Remember me</label>
                </div>
                <div className="button">
                <button onClick={()=>Login()}>Login</button>
                </div>
                <div className="login">
                   <span>Create an account</span><Link to="/">SignUp</Link>
                </div>
                </div>

                <div className="image">
                <img alt="image" src={image} height={400} width={300}></img>
                </div> 
                </div>
                </div>
                </div>
    )
}
export default Login;
