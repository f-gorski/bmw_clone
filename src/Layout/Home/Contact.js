import { useForm } from "react-hook-form";

const Contact = () => {

    const {handleSubmit, register, errors} = useForm();

    const onSubmit = (e) => {
        e.preventDefault();
        return console.log("Formularz wysłany prawidłowo")
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
                <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
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
                        <input className="form__input--text" type="text" name="firstName" placeholder="Imię*" ref={register({ required: true, pattern: /^[A-Za-z]+$/ })} />
                            {errors.firstName?.type === 'required' && 
                                <p className="form__error-msg">Pole wymagane</p>}

                            {errors.firstName?.type === 'pattern' && 
                                <p className="form__error-msg">Podane imię jest nieprawidłowe!</p>}
                    </div>
                    <div className="form__item">
                        <input className="form__input--text" type="text" name="lastName" placeholder="Nazwisko*" ref={register({ required: true, pattern: /^[A-Za-z]+$/ })}/>
                            {errors.lastName?.type === 'required' && 
                                <p className="form__error-msg">Pole wymagane</p>}

                            {errors.lastName?.type === 'pattern' && 
                                <p className="form__error-msg">Podane nazwisko jest nieprawidłowe!</p>}
                    </div>
                    <div className="form__item">
                        <input className="form__input--text" type="email" name="email" placeholder="E-mail*" ref={register({ required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })} />
                            {errors.email?.type === 'required' && 
                                <p className="form__error-msg">Pole wymagane</p>}

                            {errors.email?.type === 'pattern' && 
                                <p className="form__error-msg">Podany email jest nieprawidłowy!</p>}
                    </div>
                    <div className="form__item">
                        <input className="form__input--text" type="text" name="phone" placeholder="Numer telefonu*" ref={register({ required: true, pattern: /^[0-9\+]{8,13}$/ })}/>
                            {errors.phone?.type === 'required' &&
                                <p className="form__error-msg">Pole wymagane</p>}

                                {errors.phone?.type === 'pattern' &&
                                    <p className="form__error-msg">Podany numer telefonu jest nieprawidłowy</p>}
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