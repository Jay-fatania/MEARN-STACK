import React, { Component, useState } from 'react';
import Product_Header from '../product/Product_Header';
import {useHistory} from 'react-router-dom'
function AddProductPage(props)  {

    const [name,setName] = useState("") 
    const [cmp_name,setCompanyName] = useState("") 
    const [type,setType] = useState("") 
    const [size,setSize] = useState("") 
    const [price,setPrice] = useState("") 
    const history = useHistory()
  

    async function onSubmit() {
        let item = {name, cmp_name, type, size, price}
        console.warn(item)
        let result = await fetch("http://localhost:4000/shop/product/addproduct",{
            method:"POST",
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        })
        result = await result.json()
        console.log("result", result)
        localStorage.setItem("user_info", JSON.stringify(result))
        history.push("/product")
    }
        return (
            <div >
                <Product_Header/>
                <div className="form">
                <h3>Create New Product</h3>
                    <div>
                        <label>Name</label>
                        <input 
                            type="text"
                            name="name"
                            placeholder="Enter Name"
                            value={name}
                            onChange={(e)=>{setName(e.target.value)}}
                        />
                    </div>
                    <div>
                        <label>Company Name</label>
                        <input 
                            type="text"
                            name="campany_name"
                            placeholder="Enter Company Name"
                            value={cmp_name}
                            onChange={(e)=>{setCompanyName(e.target.value)}}
                        />
                    </div>
                    
                    <div>
                        <label>Type</label>
                        <input 
                            type="text"
                            name="type"
                            placeholder="Enter Product Type"
                            value={type}
                            onChange={(e)=>{setType(e.target.value)}}
                            />
                    </div>
                    <div>
                        <label>Size</label>
                    
                        <input 
                            type="text"
                            name="size"
                            placeholder="Enter Size"
                            value={size}
                            onChange={(e)=>{setSize(e.target.value)}}
                        />
                    </div>
                    <div>
                        <label>Price</label>
                        <input 
                            type="text"
                            name="price"
                            placeholder="Enter Price"
                            value={price}
                            onChange={(e)=>{setPrice(e.target.value)}}
                        />
                    </div>
                    <div>
                        <button type="submit" onClick={onSubmit}>Submit</button>
                    </div>
                    </div>
            </div>
        );
    }
export default AddProductPage;
