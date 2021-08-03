import React, { Component } from 'react';
import axios from 'axios';

class DetailPage extends Component {

    constructor(props) {
        super(props);
        this.state={
            product:[]
        }
    }
    

    componentDidMount(){
        const id = this.props.match.params.id
        axios.post(`http://localhost:4000/shop/product/showoneProduct/${id}`).then((res)=>{
            if(res.data){
                this.setState({
                    product: res.data.response 
                })
                console.log('response:', this.state.product)
            }
        })
    }

    render() {
        const {name, company_name, type, size, price} = this.state.product
        return (
            <div>
                <h4>{name}</h4>
                <dl class="row">
                    <dt class="col-sm-3">Company Name</dt>
                    <dd class="col-sm-9">{company_name}</dd>

                    <dt class="col-sm-3">Type</dt>
                    <dd class="col-sm-9">
                        <p>{type}</p>
                    </dd>
                    
                    <dt class="col-sm-3">Size</dt>
                    <dd class="col-sm-9">
                        <p>{size}</p>
                    </dd>
                    
                    <dt class="col-sm-3">Price</dt>
                    <dd class="col-sm-9">
                        <p>{price}</p>
                    </dd>
                </dl>
            </div>
        );
    }
}

export default DetailPage;