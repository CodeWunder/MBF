import React from 'react'
import logo from '../../assets/images/logo.png'
import openMenu from '../../assets/images/open-menu.svg'
import closeMenu from '../../assets/images/close-menu.svg'
import { Link, NavLink } from 'react-router-dom'
import Cart from '../../assets/images/cart-icon.png'
import ResetLocation from '../../helpers/ResetLocation'

const Header = ({ loginModal,
  productsQuantity,
  handleLogout,
  showModal,
  isModalActive,
  hideMenu,
  validLogin, activateLoginModal }) => {
  return (
    <header>
      {loginModal}
      <nav className="main-nav flex-container flex-row txt-center">
        <NavLink
          onClick={() => {
            ResetLocation()
            hideMenu()
          }}
          to="/"
          className="logo-styling flex-container flex-row txt-center txt-white"
        >
          <img
            width="50"
            height="50"
            className="logo"
            src={logo}
            alt="MBF NEWDAWN ENTERPRISES logo"
          />
          <h1>
          MBF<span>ENTERPRISES</span>
          </h1>
        </NavLink>
        <ul className={`navigation-menu flex-row pop-font ${isModalActive ? 'active' : ''}`}>
          <li>
            <NavLink
              onClick={() => {
                ResetLocation()
                hideMenu()
              }}
              style={({ isActive }) =>
                isActive
                  ? {
                    textDecoration: 'none',
                    color: '#9f800d',
                  }
                  : {}
              }
              className="txt-white"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                ResetLocation()
                hideMenu()
              }}
              style={({ isActive }) =>
                isActive
                  ? {
                    textDecoration: 'none',
                    color: '#9f800d',
                  }
                  : {}
              }
              className="txt-white"
              to="/menu"
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                ResetLocation()
                hideMenu()
              }}
              style={({ isActive }) =>
                isActive
                  ? {
                    textDecoration: 'none',
                    color: '#9f800d',
                  }
                  : {}
              }
              className="txt-white"
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                ResetLocation()
                hideMenu()
              }}
              style={({ isActive }) =>
                isActive
                  ? {
                    textDecoration: 'none',
                    color: '#9f800d',
                  }
                  : {}
              }
              className="txt-white"
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
           <li>
              <NavLink
                className="cart-btn active-button-style txt-white"
                to="/cart"
                onClick={() => {
                  ResetLocation()
                  hideMenu()
                }}
              >
                <img src={Cart} alt="" aria-hidden="true" />
                <p>Cart</p>
                <p>({productsQuantity})</p>
              </NavLink>
          </li>
        </ul>
        <img
          width="50"
          height="50"
          className="burger-bars"
          src={isModalActive ? closeMenu : openMenu}
          alt={isModalActive ? "Close menu" : "Open menu"}
          onClick={showModal}
        />
      </nav>
    </header>
  )
}
// }


export default Header;
