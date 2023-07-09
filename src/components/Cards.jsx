import cardLogo from '../assets/images/card-logo.svg';
import { useFormDataContext } from './form/FormInitialState';

const Cards = ({ formData }) => {
    const { name, cardNumber, month, year, cvc } = formData;
    console.log(formData);

    const defaultcardNumberValue = '0000000000000000';

    const formatText = (text) => {
        let formattedText = '';
    
        // Remove non-digit characters from the text
        const digitsOnly = text.replace(/\D/g, '');
    
        // Apply the pattern "0000 0000 0000 0000"
        for (let i = 0; i < digitsOnly.length; i += 4) {
          formattedText += digitsOnly.substring(i, i + 4) + ' ';
        }
    
        return formattedText.trim();
      };

    const getDefaultDisplayValue = (field) => {
        if (field === 'name') {
            return 'Jane Appleseed';
        } else if (field === 'cardNumber') {
            return '0000000000000000';
        } else if (field === 'month') {
            return '00';
        } else if (field === 'year') {
            return '00';
        } else if (field === 'cvc') {
            return '123'
        }

        return '';
    };

    return (
        <section id="card-container">
            <div className="card card__front">
                <div id="card-logo__wrapper">
                    <img src={cardLogo} alt="Card Logo" />
                </div>

                <h2 id="card-number">{formatText(cardNumber) || formatText(getDefaultDisplayValue('cardNumber'))}</h2>

                <div>
                    <p id="card-name">{name || getDefaultDisplayValue('name')}</p>

                    <p id="card-date">
                        <span id="card-date__month">{month || getDefaultDisplayValue('month')}</span>/<span id="card-date__year">{year || getDefaultDisplayValue('year')}</span>
                    </p>
                </div>
            </div>

            <div className="card card__back">
                <div id="dark-space"></div>
                <div id="card-cvc">{cvc || getDefaultDisplayValue('cvc')}</div>
            </div>
        </section>
    );
}

export default Cards;