import './LoginCss.css'
import React,{useState} from 'react';
import Product_Header from '../product/Product_Header';
import {useHistory} from 'react-router-dom'

function Loginpage(props) {
    const [username, setname] = useState("")
    const [password, setpassword] = useState("")
    const history = useHistory()

    async function onLoginClick(){
        let items= {username,password}
        console.warn(items)
        let result = await fetch('http://localhost:4000/login',{
          method:"POST",
          body:JSON.stringify(items),
          headers:{
              "Content-Type":"application/json",
              "Accept":'application/json',
              "Authorization":"application/json"
          }
        })
        result = await result.json()
        console.log("result", result)
        localStorage.setItem("user_info",JSON.stringify(result))
        history.push('/customer')
    }
    return (
        <div>                
            <Product_Header/>
        <div className="form">
                <div className="imgcontainer">
                    <h1 className='title_login'>Login</h1>
                </div>
                <div className="container">
                    <label ><b>Username</b></label>
                    <input type="text"
                    value={username}
                    onChange={(e)=>{setname(e.target.value)}}
                    placeholder="Enter Username" 
                    name="uname" required/>

                    <label ><b>Password</b></label>
                    <input type="password"
                    value={password} 
                    onChange={(e)=>{setpassword(e.target.value)}}
                    placeholder="Enter Password" 
                    name="psw" required/>

                    <button onClick={onLoginClick}>Login</button>
                    <label className ='login_link'>
                    Click here for <a  href="a.js" ><b>New Account</b></a>
                    </label>
                </div>
                <div className="container">
                    <button type="button" className="cancelbtn">Cancel</button>
                    <span className="psw">Forgot <a href="a.js">password</a></span>
                </div>
        </div>
        </div>

    );
}
export default Loginpage;