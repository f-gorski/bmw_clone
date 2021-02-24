import { useState } from 'react';
import { Link as LinkScroll } from 'react-scroll';
import CtaButton from '../../Components/CtaButton';

const Hero = () => {

    const [slide, setSlide] = useState("slide1");

    const handleClick = (e) => {
        const id = e.target.id;
        setSlide(id);
    }

    return (
        <section id="hero" className={"hero " + slide}>
            <div className="container">
                <div className="nav-desktop">
                    <ul className="nav__items">
                        <li className="nav__item">
                            <LinkScroll smooth={true} to="facts">Nowe BMW iX</LinkScroll>
                        </li>
                        
                        <li className="nav__item">
                            <LinkScroll smooth={true} to="contact">Umów jazdę próbną</LinkScroll>
                        </li>
                    </ul>
                    <hr className="nav__line" />
                    <div className="slogan"><span className="bold">Radość</span> z jazdy</div>
                </div>
                <img src={require('../../assets/bmw_logo.svg').default} alt="logo BMW" className="bmw-logo" />

                <div className="hero__content">
                    <img src={require('../../assets/bmw_i_logo.svg').default} alt="logo BMW" className="hero__logo" />
                    <h1 className="hero__header">Nowe BMW iX</h1>
                    <h2 className="hero__subheader">PIONIER NOWEJ ERY.</h2>
                </div>
                <div className="cta">
                    <CtaButton stylingName="cta-button" linkTo="contact" />
                    <div className="slider-bars">
                        <div 
                            className={slide === "slide1" ? "slider-bar slider-bar--active" : "slider-bar"} 
                            id="slide1" 
                            onClick={handleClick}>
                        </div>
                        <div 
                            className={slide === "slide2" ? "slider-bar slider-bar--active" : "slider-bar"} 
                            id="slide2" 
                            onClick={handleClick}>
                        </div>
                        <div 
                            className={slide === "slide3" ? "slider-bar slider-bar--active" : "slider-bar"} 
                            id="slide3" 
                            onClick={handleClick}>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;