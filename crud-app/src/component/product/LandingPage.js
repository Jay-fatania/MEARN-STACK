import Product_Header from './Product_Header';
import React, { Component } from 'react';
import axios from 'axios'; 

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state={
          Products:[]
        }
      }
      
      componentDidMount(){
        this.getProducts()
      }
    
      getProducts(){
        axios.get("http://localhost:4000/shop/product/showProduct").then((res) =>{
          if(res.data){
            this.setState({
              Products: res.data.response
            })
            console.log(this.state.Products)
          }
        })
      } 
    
      onDelete = (id)=>{
        // alert(id) 
        axios.delete(`http://localhost:4000/shop/product/deleteProduct/${id}`).then((res)=>{
          alert('Customer Deleted')
          this.getProducts()
        })
      }

      render() {
        return (
          <div>
            <Product_Header/>
       
          <div className="container">
            {/* <Header /> */}
    
            <table class="table table-hover">
            <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Name</th>
          <th scope="col">Company Name</th>
          <th scope="col">Type</th>
          <th scope="col">Size</th>
          <th scope="col">Price</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        
      {this.state.Products.map((product, index) => (
              
        <tr>
          <th scope="row">{index}</th>
          <td >{product.name}</td>
          <td >{product.company_name}</td>
          <td >{product.type}</td>
          <td >{product.size}</td>
          <td >{product.price}</td>
          <td>
          <a className="btn btn-info" href={`/product/showoneProduct/${product._id}`} >
              <i className="fas fa-info-circle"></i>&nbsp;View
            </a> &nbsp;
            <a className="btn btn-warning">
              <i className="fas fa-edit"></i>&nbsp;Edit
            </a> &nbsp;
            <a className="btn btn-danger" href='#'onClick={() => this.onDelete(product._id)}>
                <i className="far fa-trash-alt"></i>&nbsp;Delete
            </a>
          </td>
        </tr>
        ))}
      </tbody>
    </table>
    <a className="btn btn-primary" href="/add">Add New Product</a>
          </div>
          </div>
        );
      }
}

export default LandingPage;