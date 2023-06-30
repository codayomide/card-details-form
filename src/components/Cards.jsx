import cardLogo from '../assets/images/card-logo.svg';
import { useFormDataContext } from './form/FormInitialState';

const Cards = ({ formData }) => {
    const { name, cardNumber, date, cvc } = formData;
    console.log(formData);

    return (
        <section id="card-container">
            <div className="card card__front">
                <div id="card-logo__wrapper">
                    <img src={cardLogo} alt="Card Logo" />
                </div>

                <h2 id="card-number">{cardNumber}</h2>

                <div>
                    <p id="card-name">{name}</p>

                    <p id="card-date">
                        <span id="card-date__month">{date.month}</span>/<span id="card-date__year">{date.year}</span>
                    </p>
                </div>
            </div>

            <div className="card card__back">
                <div id="dark-space"></div>
                <div id="card-cvc">{cvc}</div>
            </div>
        </section>
    );
}

export default Cards;