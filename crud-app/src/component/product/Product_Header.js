import React, { Component } from 'react';
import {useHistory} from "react-router-dom"
class Product_Header extends Component {


  logout(){
    localStorage.clear()
    }

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-info">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">My Shop</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                {
                  localStorage.getItem('user_info') ?
                    <>
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/product">Products</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/customer">Customer</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" onClick={this.logout} href="/Login">Logout</a>
                      </li>

                    </>
                    :
                    <>
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/Login">Login</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/SignUp">SignUp</a>
                      </li>

                    </>
                }
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Product_Header;