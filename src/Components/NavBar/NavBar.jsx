import { Link } from 'react-router-dom'
import './NavBar.css'
import shoppingCart from '../../assets/shoppingcart.svg'
import account_icon from '../../assets/account.svg'
import faq_icon from '../../assets/faq.svg'
import arrow_icon from '../../assets/arrowdown2.svg'
import menu_icon from '../../assets/menu.svg'

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            Logo
        </div>
        <div className="menu-link">
            <Link to="/">Categories <img src={arrow_icon} alt="" /></Link>
            <Link to="/">FAQs</Link>
            <Link to= "/">Contact Us</Link>
            <Link to="/">Join Us <img src={arrow_icon} alt="" /></Link>
        </div>
        <div className="account-cart">
            <div className='cart'>
                <div className='items'>
                    <img src={shoppingCart} />
                    <div id='counter'>0</div>
                </div>
            </div>

            <div className="faq">
                <img src={faq_icon}  />
            </div>
            <div className="account">
                <img src={account_icon} />
            </div>

            <div className='menu'>
                <img src={menu_icon} />
            </div>
        </div>
    </div>
  )
}

export default NavBar