import React, { Component, useState } from 'react'
import Menu from './svg/bars-solid.svg'
import Close from './svg/xmark-solid.svg'
import CartIcon from './svg/cart-shopping-solid.svg'
import {Link} from 'react-router-dom'
import './css/Header.css'
import Cart from './section/Cart'
import {DataContext} from './Context'

export class Header extends Component {
    static contextType = DataContext;
  render() {
    const {cart} = this.context;

  return (
    <header>
    <div className="menu">
        <img src={Menu} alt="" width="20"/>
    </div>
    <div className="logo">
        <h1><Link to="/">My Shooppy</Link></h1>
    </div>
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Login / Register</Link></li>
            <li className="close">
                <img src={Close} alt="" width="20"/>
            </li>
        </ul>
        <div className="nav-cart">
        <span>{cart.length}</span>
            <Link to="/cart">
                <img src={CartIcon} alt="" width="20"/>
            </Link>
        </div>
    </nav>
</header>
  )
}
}
export default Header