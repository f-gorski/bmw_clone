const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__social">
                    <h3 className="footer__social-header">
                        Dołącz do nas
                    </h3>
                    <ul className="footer__social-links">
                        <li className="footer__link-element--social"><a href="#" className="footer__link"><i className="fab fa-facebook-f fa-2x"></i></a></li>
                        <li className="footer__link-element--social"><a href="#" className="footer__link"><i className="fab fa-instagram fa-2x"></i></a></li>
                        <li className="footer__link-element--social"><a href="#" className="footer__link"><i className="fab fa-youtube fa-2x"></i></a></li>
                        <li className="footer__link-element--social"><a href="#" className="footer__link"><i className="fab fa-linkedin-in fa-2x"></i></a></li>
                        <li className="footer__link-element--social"><a href="#" className="footer__link"><i className="fab fa-twitter fa-2x"></i></a></li>
                    </ul>
                </div>
                <div className="footer__content">
                    <div className="footer__client-zone">
                        <h3 className="footer__client-zone-header">
                            Strefa klienta
                        </h3>
                        <ul className="footer__client-zone-links">
                            <li className="footer__link-element"><a href="#" className="footer__link">Centrum Obsługi Klienta BMW</a></li>
                            <li className="footer__link-element"><a href="#" className="footer__link">Znajdź dealera BMW</a></li>
                            <li className="footer__link-element"><a href="#" className="footer__link">Pobierz cenniki / broszury</a></li>
                            <li className="footer__link-element"><a href="#" className="footer__link">Często zadawane pytania</a></li>
                        </ul>
                    </div>
                    <div className="footer__about">
                        <h3 className="footer__about-header">
                            Poznaj BMW
                    </h3>
                        <ul className="footer__about-links">
                            <li className="footer__link-element"><a href="#" className="footer__link">Informacje prasowe</a></li>
                            <li className="footer__link-element"><a href="#" className="footer__link">BMW Polska</a></li>
                            <li className="footer__link-element"><a href="#" className="footer__link">Kariera</a></li>
                        </ul>
                    </div>
                    <div className="footer__law">
                        <h3 className="footer__law-header">
                            Informacje prawne
                    </h3>
                        <ul className="footer__law-links">
                            <li className="footer__link-element"><a href="#" className="footer__link">Mapa serwisu</a></li>
                            <li className="footer__link-element"><a href="#" className="footer__link">Nota prawna / Prywatność</a></li>
                            <li className="footer__link-element"><a href="#" className="footer__link">Polityka cookie</a></li>
                            <li className="footer__link-element"><a href="#" className="footer__link">Warunki korzystania z MyBMW</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer__copyright">
                <span>&copy; Random Car Company 2021</span>
            </div>
        </footer>
    )
}

export default Footer;