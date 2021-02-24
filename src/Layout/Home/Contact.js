import { useContext } from 'react'

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        //Validation and submit logic and POST request will be handled here
    }

    return (
        <section id="contact" className="contact">
           <img className="contact__photo-top" 
           src={require('../../assets/bmw-ix-front.png').default} 
           srcSet={require('../../assets/bmw-ix-front@2x.png') + '2x'} alt="bmw photo front" />

            <div className="contact__content">
                <h2 className="contact__header">Umów jazdę próbną <sup>BMW iX</sup></h2>
                <p className="contact__text">
                    Zachęcamy do ograniczenia poruszania się i pozostania w domu. Jeśli jednak jazda testowa okaże się niezbędna prosimy o wypełnienie poniższego formularza.
                </p>
                <form className="contact__form" >
                    <h3 className="form__header">
                        Wypełnij formularz swoimi danymi.
                    </h3>
                    <div className="form__item--radios">
                        <input className="form__input--radio" type="radio" name="gender" value="Pan" id="mr" />
                        <label className="form__label" htmlFor="mr">Pan</label>

                        <input className="form__input--radio" type="radio" name="gender" value="Pani" id="ms" />
                        <label className="form__label" htmlFor="ms">Pani</label>
                    </div>
                    <div className="form__item">
                        <input className="form__input--text" type="text" name="firstName" placeholder="Imię*" />
                    </div>
                    <div className="form__item">
                        <input className="form__input--text" type="text" name="lastName" placeholder="Nazwisko*" />
                    </div>
                    <div className="form__item">
                        <input className="form__input--text" type="email" name="email" placeholder="E-mail*" />
                    </div>
                    <div className="form__item">
                        <input className="form__input--text" type="text" name="phone" placeholder="Numer telefonu*" />
                    </div>
                    <div className="form__item--submit">
                        <button type="submit" className="form__submit" onClick={handleSubmit}>Wyślij</button>
                    </div>

                </form>
            </div>
            <img className="contact__photo-bottom" 
            src={require('../../assets/bmw-ix-side.png').default}
            srcSet={require('../../assets/bmw-ix-side@2x.png') + '2x'} alt="bmw photo side" />
        </section>
    )
}

export default Contact;