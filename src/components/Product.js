import React, {Component} from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom';
import BuyProductPage from './BuyProductPage';
export class Product extends Component {
    
    constructor(props){
        super(props);
        this.state = {products:[], buyModalShow : false}
    }
    
    componentDidMount(){
        this.refreshList();
    }
    refreshList(){
        fetch('https://localhost:44307/api/product')
        .then(response=>response.json())
        .then(data => {
            this.setState({products:data});
        
        });
    }
    componentDidUpdate(){
        this.refreshList();
    }

    
    render(){
        const {products, productid, productname} = this.state;
        let buyModalClose = () => this.setState({buyModalShow: false});

        return (
            <h1>{products.map(product=>
               
                <div className="inline-block product  text-center" onClick= {() => this.setState({buyModalShow: true, productid: product.ProductID, productname: product.ProductName })}>
                
                <img src={product.ProductLink} className="" height='200' width='200' alt =""/>
                    
                
                <p>
                
                 
                {product.ProductName}</p>
                <BuyProductPage show={this.state.buyModalShow} onHide={buyModalClose} productid = {product.ProductID} productname= {product.ProductName} productlink = {product.ProductLink}/></div>
                
                )
                
                }</h1>
                
            
            );
    }
}


export default Product