/* eslint-disable jsx-a11y/anchor-is-valid */
import {Link, NavLink} from "react-router-dom";
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

const Navbar = () => {

    const state = {clicked: false}

    const handleClick = () => {
        setState({ clicked : !state.clicked })
    }

    return (
        <nav className="NavbarContainer">
            <div className="IsiContainer">
                <div className="IconsTitle">
                    <a>
                        <img src={titleWord} alt="ic_title"/>
                    </a>
                </div>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={state.clicked ? 'fas fa-times' : 'fas fa-bars'}>
                    </i>
                </div>
                <ul className={state.clicked ? 'nav-menu active' : 'nav-menu' }> 
                    <NavLink to="/" className={`nav-links ${({isActive}) => (isActive ? "active" : "")}`}>
                        <li>
                            Beranda
                        </li>
                    </NavLink> 
                    <NavLink to="/project" className={`nav-links ${({isActive}) => (isActive ? "active" : "")}}`}>
                        <li>
                            Project
                        </li>
                    </NavLink>
                    <NavLink to="/produk" className={`nav-links ${({isActive}) => (isActive ? "active" : "")}}`}>
                        <li>
                            Produk
                        </li>
                    </NavLink>
                    <NavLink to="/contact" className={`nav-links ${({isActive}) => (isActive ? "active" : "")}}`}>
                        <li>
                            Contact
                        </li>
                    </NavLink>
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
            </div>
            
        </nav>
    )
    
}

export default Navbar