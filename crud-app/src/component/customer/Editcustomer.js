import React, { Component } from 'react';
import axios from 'axios';
import Product_Header from '../product/Product_Header';


class Editcustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usr_name  :"",
            usr_email:"",
            usr_password:""
           
        }
    }

    componentDidMount(){
        axios.get().then((res)=>{
            if(res.data){
                this.setstate({
                    usr_name:res.data.response.usr_name,
                    usr_emial:res.data.response.usr_email,
                    usr_password:res.data.response.usr_password
                })
                console.log(this.data)
            }
        })
    }
    handleInputChange = (e) => {
        const {name, value} = e.target
        this.setstate({
            ...this.state,
            [name]:value, 
        })
    }

    onSubmit = (e) =>{
        e.preventDefault()
        const {usr_name, usr_email, usr_password} = this.state
        const data = {
            usr_name:usr_name,
            usr_email:usr_email,
            usr_password:usr_password,    
        }
        console.log(data)
        axios.put("http://localhost:4000/shop/customer/addCustomer").then((res)=>{
            if(res.data){
                alert('Updated Customer Details')
            }
        })
    }
    render() {
        return (
            <div >
                <Product_Header/>
                <h3>Edit Customer</h3>
                <form>
                    <div>
                        <label>Name</label>
                        <input 
                            type="text"
                            name="usr_name"
                            placeholder="Enter Name"
                            value={this.state.usr_name}
                            onChange={this.handleInputeChange}
                        />
                    </div>
                    
                    <div>
                        <label>Email</label>
                        <input 
                            type="text"
                            placeholder="Enter Email"
                            name="usr_email"
                            value={this.state.usr_email}
                            onChange={this.handleInputeChange}
                        />
                    </div>
                    
                    <div>
                        <label>Password</label>
                        <input 
                            type="password"
                            name="usr_password"
                            placeholder="Enter Password"
                            value={this.state.usr_password}
                            onChange={this.handleInputeChange}
                        />
                    </div>
                    <div>
                        <button type="submit" onClick={this.onSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Editcustomer;