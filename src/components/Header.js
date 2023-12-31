import React, { useState } from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import menu from '../components/asserts/icons/icon-menu.svg'
import close from '../components/asserts/icons/icon-close.svg'
import logo from '../components/asserts/icons/logo.png'
import avatar from '../components/asserts/icons//image-avatar.png'
import Cart from './Cart';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [cartIsOpen, setCartIsOpen] = useState(false);
    return (
        <>
        <header className="relative flex items-center justify-between p-8 border-b border-slate-400 max-w-7xl mx-auto">
          <div className="flex items-center justify-start gap-4">
            <ul className="flex items-center justify-start gap-4">
              {!isOpen && (
                <li onClick={() => setIsOpen(true)} className="lg:hidden">
                  <img src={menu} alt="" className="cursor-pointer" />
                </li>
              )}
              {isOpen && (
                <li onClick={() => setIsOpen(false)} className="lg:hidden close">
                  <img src={close} alt="" className="cursor-pointer w-6" />
                </li>
              )}
              <li>
                <img src={logo} alt="" />
              </li>
            </ul>
  
            <nav className={isOpen && "open"}>
              <ul className="">
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          </div>
  
          <div>
            <ul className="flex items-center justify-start gap-4">
              <li>
                <button onClick={() => setCartIsOpen(!cartIsOpen)}>
                  <AiOutlineShoppingCart className="text-2xl text-slate-600" />
                </button>
              </li>
              <li>{cartIsOpen && <Cart />}</li>
              <li>
                <img src={avatar} alt="" className="w-12" />
              </li>
            </ul>
          </div>
        </header>
      </>
    );
};

export default Header;