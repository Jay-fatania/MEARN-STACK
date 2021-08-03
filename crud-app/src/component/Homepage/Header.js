import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login  from "../Login/Loginpage";
import MainContent from './Main_content';
import SignUp from '../SignUp/SignUp';
import './Main_css.css'
class Header extends Component {
    render() {
        return (
            <div>
                    {/* // <!DOCTYPE html> */}
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <div className="topnav" id = "rootNav">
                        <Router >
                            <Link className="">MyShop</Link>
                            <Link className="Deshboard" to='/'>Deshboard</Link>
                            <Link className='login_SignUp' to='/SignUp'>SignUp</Link>
                            <Link className='login_SignUp' to='/Login'>Login</Link>

                            <Route exact path='/' component={MainContent}/>
                            <Route path='/Login' component={Login}/>
                            <Route path='/SignUp' component={SignUp}/>
                            
                        </Router>
                    </div>
                  
            </div>
        );
    }
}

export default Header;