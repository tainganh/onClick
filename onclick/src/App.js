import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './components/Product'
class App extends Component {
    onClick(text){
        console.log(text);
    }
  render() {
    var products = [
        {
            id: 1,
            name: 'iphone 6plus',
            price: 15000000,
            image:'https://cdn.fptshop.com.vn/Uploads/Originals/2017/12/14/636488604632055821_HASP-IPHONE-6S-PLUS-32GB-00271555%20(5).jpg',
            status: false
        },
        {
            id: 2,
            name: 'iphone 7plus',
            price: 25000000,
            image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2017/12/14/636488604632055821_HASP-IPHONE-6S-PLUS-32GB-00271555%20(5).jpg',
            status: true
        },
        {
            id: 3,
            name: 'iphone 8plus',
            price: 35000000,
            image:'https://cdn.fptshop.com.vn/Uploads/Originals/2017/12/14/636488604632055821_HASP-IPHONE-6S-PLUS-32GB-00271555%20(5).jpg',
            status: true
        }
    ];
    let elements= products.map((product,index)=>{
        let result='';
        if(product.status){
          result=   <Product
                    key={product.id} 
                    name={ product.name}
                    price={ product.price }
                    image={ product.image }
                    >
                
                </Product>
        }
        return result;
        });
    return (
    <div>
      <nav className="navbar navbar-inverse">
          <div className="container-fluid">
              <a className="navbar-brand" >Home</a>
               <a className="navbar-brand" >List </a>
                <a className="navbar-brand">Home</a>
          </div>
      </nav>
      <div className="container-fluid">
          <div className="row">
              <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                     {elements}
                      
                  </div>
                  
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      
                      <button type="button" className="btn btn-warning" onClick={ this.onClick }>
                      Mua Ngay
                      </button>
                      
                  </div>
                  
              </div>
          </div>
      </div>
    </div>
    );
  }
}

export default App;
