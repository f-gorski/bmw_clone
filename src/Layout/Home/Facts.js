const Facts = () => {
    return (
        <section id="facts" className="facts">
            <div className="facts__photos">
                <img className="facts__photo" 
                src={require('../../assets/foto1_1.png').default} 
                srcSet={require('../../assets/foto1_1@2x.png') + '2x'} alt="bmw photo " />
                <img className="facts__photo" 
                src={require('../../assets/foto1_2.png').default}
                srcSet={require('../../assets/foto1_2@2x.png') + '2x'} alt="bmw photo"/>
            </div>
            <div className="facts__content">
                <img src={require('../../assets/ico_1.svg').default} alt="" className="facts__icon" />
                <h2 className="facts__header">FAKTY O NOWYM BMW iX.</h2>
                <ul className="facts__list">
                    <li className="facts__list-element">
                        <div className="facts__item">
                            <h3 className="facts__item-number">01</h3>
                            <p className="facts__item-text">
                                Ponad 600 km zasięgu *
                            </p>
                        </div>
                    </li>
                    <li className="facts__list-element">
                        <div className="facts__item">
                            <h3 className="facts__item-number">02</h3>
                            <p className="facts__item-text">
                            Elektryczny napęd na wszystkie koła z dwiema osiami napędzanymi elektrycznie i ponad 500 KM (370 kW) *
                            </p>
                        </div>
                    </li>
                    <li className="facts__list-element">
                        <div className="facts__item">
                            <h3 className="facts__item-number">03</h3>
                            <p className="facts__item-text">
                                Od 0 do 100 km / h w mniej niż 5 sekund *
                            </p>
                        </div>
                    </li>
                    <li className="facts__list-element">
                        <div className="facts__item">
                            <h3 className="facts__item-number">04</h3>
                            <p className="facts__item-text">
                                Ładowanie 120 km w 10 minut{'\u00A0'}*
                            </p>
                        </div>
                    </li>
                    <li className="facts__list-element">
                        <div className="facts__item">
                            <h3 className="facts__item-number">05</h3>
                            <p className="facts__item-text">
                                Publiczne szybkie ładowanie od 10 do 80% w mniej niż 40 minut
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Facts;