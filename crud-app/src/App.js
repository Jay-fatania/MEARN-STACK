import './App.css'
import React, { Component } from 'react';
import {BrowserRouter, Route} from "react-router-dom"
import LandingPage from './component/product/LandingPage';
import AddProductPage from './component/product/AddProductPage';
import EditPage from './component/product/EditPage';
import DetailPage from './component/product/DetailPage';
import Product_Header from './component/product/Product_Header';
import CustomerLandingPage from './component/customer/CustomerLandingPage';
import AddCustomer from './component/customer/AddCustomer';
import Editcustomer from './component/customer/Editcustomer';
import DetailCustomer from './component/customer/DetailCustomer';
import Header from './component/Homepage/Header';
import loginpage from './component/Login/Loginpage';
import SignUp from './component/SignUp/SignUp';

class App extends Component {
  render() {
    return (
      <div className="container">
        {/* <Header /> */}
        {/* <Product_Header /> */}
        <BrowserRouter>
          <div >
            <Route path="/product" exact component={LandingPage}/>
            <Route path="/add" component={AddProductPage}/>
            <Route path="/edit" component={EditPage}/>
            <Route path="/product/showoneProduct/:id" component={DetailPage}/>

            <Route path="/customer" exact component={CustomerLandingPage}/>
            <Route path="/addcustomer" component={AddCustomer}/>
            <Route path="/customer/update/:id" component={Editcustomer}/>
            <Route path="/customer/showoneCustomer/:id" component={DetailCustomer}/>

            <Route path="/Login" exact component={loginpage}/>
            <Route path="/SignUp" exact component={SignUp}/>
          </div>
        </BrowserRouter>        
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       {/* <Main />       */}
//       {/* <Login /> 
//       <SignUp /> */}
//     </div>
//   );
// }

// export default App;