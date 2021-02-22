import React, { useState } from 'react';
import { Link as LinkScroll } from 'react-scroll';
import Burger from './Burger';

const Nav = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <header>
            <div className="navigation__container">
                <Burger isOpen={isOpen} setOpen={setOpen} />
                <nav className={isOpen ? "navigation navigation--open" : "navigation"}>
                    <hr className="decoration-line" />
                    <ul className="navigation__link-list">
                        <li className="navigation__link-item"><div><LinkScroll smooth={true} to="hero" className="navigation__link" activeClassName="navigation__link--active">NOWE BMW iX.</LinkScroll></div></li>
                        <li className="navigation__link-item"><div><LinkScroll smooth={true}to="description" className="navigation__link" activeClassName="navigation__link--active">INNOWACYJNA AERODYNAMIKA</LinkScroll></div></li>
                        <li className="navigation__link-item"><div><LinkScroll smooth={true} to="gallery" className="navigation__link" activeClassName="navigation__link--active">GALERIA</LinkScroll></div></li>
                        <button className="cta-button">UMÓW JAZDĘ PRÓBNĄ</button>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Nav;