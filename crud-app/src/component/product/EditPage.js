import React, { Component } from 'react';
import axios from 'axios';
import Product_Header from '../product/Product_Header';
import { Redirect, useHistory } from "react-router-dom"
const history = useHistory


class EditPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            company_name: "",
            size: "",
            type: "",
            price: "",
            product:[]
        }
    }

    componentDidMount() {

        const id = this.props.match.params.id
        console.log(id)
        axios.post(`http://localhost:4000/shop/product/showoneProduct/${id}`).then((res) => {
            if (res.data) {
                this.setState({
                    product:res.data.response,
                    name: res.data.response.name,
                    company_name: res.data.response.company_name,
                    type: res.data.response.type,
                    size: res.data.response.size,
                    price: res.data.response.price,
                })
                console.log(res.data.response)
            }
        })
    }
    handleInputChange = (e) => {
        const { name, value } = e.target
        this.setstate({
            [name]: value,
            ...this.state,
        })
    }

    onSubmit = (e) => {
        // e.preventDefault()
        const id = this.props.match.params.id
        console.log(id)
        const { name, company_name, type, size, price } = this.state
        const data = {

            name:     name,
            company_name: company_name,
            type:     type,
            size:     size,
            price:    price,

        }
        console.log("After ENter new data =>",data)
        axios.put(`http://localhost:4000/shop/product/updateProduct/${id}`, data).then((res) => {
            if (res.data) {
                alert('Updated Customer Details')
                window.location.href = "/product"
            }
        })
    }
    render() {
        return (
            <div >
                <Product_Header />
                <h3>Edit Product</h3>
                <div className="form">
                    <div>
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Name"
                            value={this.state.name}
                            onChange={(e) => { this.setState({ name: e.target.value }) }} />
                    </div>

                    <div>
                        <label>Company Name</label>
                        <input
                            type="text"
                            placeholder="Enter Company Name"
                            name="company_name"
                            value={this.state.company_name}
                            onChange={(e) => { this.setState({ company_name: e.target.value }) }} />
                    </div>

                    <div>
                        <label>Type</label>
                        <input
                            type="text"
                            name="type"
                            placeholder="Enter Type"
                            // defaultValue={this.state.usr_password}
                            value={this.state.type}
                            onChange={(e) => { this.setState({ type: e.target.value }) }}
                        />
                    </div>
                    <div>
                        <label>Size</label>
                        <input
                            type="text"
                            name="size"
                            placeholder="Enter size"
                            // defaultValue={this.state.usr_password}
                            value={this.state.size}
                            onChange={(e) => { this.setState({ size: e.target.value }) }}
                        />
                    </div>
                    <div>
                        <label>Price</label>
                        <input
                            type="text"
                            name="price"
                            placeholder="Enter Price"
                            // defaultValue={this.state.usr_password}
                            value={this.state.price}
                            onChange={(e) => { this.setState({ price: e.target.value }) }}
                        />
                    </div>

                    <div>
                        <button type="submit" onClick={this.onSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditPage;
