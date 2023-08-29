import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './Signup.css';
import image from '../image/signup.jpg';
import usericon from '../image/usericon.png';
import emailicon from '../image/emailicon.png';
import passwordicon from '../image/passwordicon.png';
import {NavLink,useNavigate} from 'react-router-dom';
import {URL_API} from '../URL';
import{
    Browser as Router,
    Link,
    Route,
    Routes
}from 'react-router-dom';
function Signup()
{
    const[name,setName]=useState(" ")
    const[email,setEmail]=useState(" ")
    const[password,setPassword]=useState(" ")
    const[confirmpassword,setConfirmpassword]=useState(" ")

    var checkbox=document.getElementById("checkbox")

    var nameRegx=/([a-zA-Z]{3,10})/
    var emailRegx=/([a-zA-Z0-9]{3,15})+@+([a-zA-z]{3,10})+\.+([a-z,A-Z]{2,10})/
    var passwordRegx=/([a-zA-Z0-9]{6})/
    var confirmpasswordRegx=/([a-zA-Z0-9]{6})/

    const[apidata,setapidata]=useState([])
    const CallApi=async()=>{
        const resp=await axios.get(URL_API)
        setapidata(resp.data)
    }
    useEffect(()=>{
    CallApi()
        },[])
    
const Navigate=useNavigate()

const mychange=(e)=>{
    setName(e.target.value)
}


    const PostData=async()=>{
        apidata.map((e)=>{
            if(e.name === name){
                return alert("Name already exist")
            }
        })
        if(name === "" && password === ""){
            return alert("please fill the input fields")
        }
        else if(!nameRegx.test(name)){
            return alert("name should be more than 3 letters")
        }
        else if(!emailRegx.test(email)){
            return alert("Invalid Email")
        }
        else if(!passwordRegx.test(password)){
            return alert("password should be 6 characters")
        }
        else if(confirmpassword !== password)
        {
            return alert("confirm password dosn't match")
        }

        else{
        await axios.post(URL_API,{
            name,
            email,
            password,
            confirmpassword
        })
        Navigate('/login')}
       }
       
    return(
            <div className="Form">
            <div className='container'>
                <div className='image'>
                    <img src={image} height={400} width={400}></img>
                </div>
                <div className="form">
                    <h1>Sign Up</h1>
                    <div ClassName="username">
                        <label><i><img src={usericon} alt=""></img></i></label>
                        <input type="text" name="username" placeholder="Username" 
                        value={name}
                        onChange={(e)=>mychange(e)}></input>
                    </div>
                    <div ClassName="email">
                    <label><i><img src={emailicon} alt=""></img></i></label>
                        <input type="text" name="email" placeholder="Email" 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}></input>
                    </div>
                    <div ClassName="password">
                    <label><i><img src={passwordicon} alt=""></img></i></label>
                        <input type="text" name="password" placeholder="Password" 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}></input>
                    </div>
                    <div ClassName="confirm password">
                    <label><i><img src={passwordicon} alt=""></img></i></label>
                        <input type="text" name="confirm password" placeholder="Confirm Password" 
                        value={confirmpassword}
                        onChange={(e)=>setConfirmpassword(e.target.value)}></input>
                    </div>
                    <div className="label">
                        <input type="checkbox" className="custom-control-input"></input>
                        <label className="custom-control-label">I agree all statements in terms of service</label>
                    </div>
                    <div className="button">
                        <button onClick={()=>PostData()}>Register Now</button>
                    </div>
                    <div className="login">
                       <Link to='/login'>i am already member</Link>
                    </div>
                </div>
            
        </div>
        </div>
        
    )
}
export default Signup;