import React, { Component } from 'react';
import axios from 'axios'
import Product_Header from '../product/Product_Header';

class CustomerLandingPage extends Component {
    constructor(props) {
        super(props);
        this.state={
          Customer:[]
        }
      }
      
      componentDidMount(){
        this.getCustomer()
      }
    
      getCustomer(){
        axios.get("http://localhost:4000/shop/customer/showCustomer").then((res) =>{
          if(res.data){
            this.setState({
              Customer: res.data.response
            })
            console.log(this.state.Customer)
          }
        })
      }
    
      onDelete = (id, name)=>{
        alert(name) 
        axios.delete(`http://localhost:4000/shop/customer/delete/${id}`).then((res)=>{
          alert('Customer Deleted')
          this.getCustomer()
        })
      }

      render() {
        return (
          <div>
            <Product_Header />
          <div className="container">
            {/* <Header /> */}
    
            <table class="table table-hover">
            <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Password</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
      
            
      {this.state.Customer.map((customer, index) => (
              
        <tr>
          <th scope="row">{index}</th>
          <td >{customer.usr_name}</td>
          <td >{customer.usr_email} </td>
          <td >{customer.usr_password}</td>
          <td>
          <a className="btn btn-info" href={`/customer/showoneCustomer/${customer._id}`} >
              <i className="fas fa-info-circle"></i>&nbsp;View
            </a> &nbsp;
            <a className="btn btn-warning" href={`/customer/update/${customer._id}`} >
              <i className="fas fa-edit"></i>&nbsp;Edit
            </a> &nbsp;
            <a className="btn btn-danger"  href='#' onClick={() => this.onDelete(customer._id, customer.usr_name)}>
                <i className="far fa-trash-alt"></i>&nbsp;Delete
            </a>
          </td>
        </tr>
        ))}
      </tbody>
    </table>
    <a className="btn btn-primary" href="/addCustomer">Add New Customer</a>
          </div>
          </div>
        );
      }
}

export default CustomerLandingPage;