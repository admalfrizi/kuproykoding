/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { useCart } from "react-use-cart";
import titleWord from '../../assets/title_word.svg'
import wa from '../../assets/wa_ic.svg'
import chat from '../../assets/chat_ic.svg'
import notif from '../../assets/notif_ic.svg'
import cart from '../../assets/cart.svg'
import "./Navbar.css"

const ItemLength = () => {
    const {
       totalItems,
    } = useCart();

    return (
         <div className='totalitems'>
             <p>{totalItems}</p>
         </div>
    )

}

class Navbar extends Component {

    state = {clicked: false}

    handleClick = () => {
        this.setState({ clicked : !this.state.clicked })
    }

    render() {
        return (
            <nav className="NavbarContainer">
                <div className="IconsTitle">
                    <a>
                        <img src={titleWord} alt="ic_title"/>
                    </a>
                </div>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}>
                    </i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu' }> 
                    <Link to="/" className="nav-links">
                        <li>
                            Beranda
                        </li>
                    </Link> 
                    <Link to="/project" className="nav-links">
                        <li>
                            Project
                        </li>
                    </Link>
                    <Link to="/categories" className="nav-links">
                        <li>
                            Kategori
                        </li>
                    </Link>
                    <Link to="/produk" className="nav-links">
                        <li>
                            Produk
                        </li>
                    </Link>
                    <Link to="/contact" className="nav-links">
                        <li>
                            Contact
                        </li>
                    </Link>
                </ul>
                <div className="nmr_telp">
                    <img src={wa} alt="wa"/>
                    <h1 className="nmr">1-5500-2344</h1>
                </div>
                <div className="chat_and_notif">
                    <a href="#">
                        <img src={chat} alt="chat"/>
                    </a>
                    <a className="notif" href="#">
                        <img src={notif} alt="notif"/>
                    </a>
                </div>
                <Link to="/cart" className="cart" href="#">
                    <img src={cart} alt="notif"/>
                    <ItemLength/>
                </Link>
            </nav>
        )
    }
}

export default Navbar