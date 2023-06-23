import cardLogo from '../assets/images/card-logo.svg';

const Cards = () => {
    return (
        <section id="card-container">
            <div className="card card__front">
                <div id="card-logo__wrapper">
                    <img src={cardLogo} alt="Card Logo" />
                </div>

                <h2 id="card-number">0000 0000 0000 0000</h2>

                <div>
                    <p id="card-name">Jane Appleseed</p>

                    <p id="card-date">
                        <span id="card-date__month">00</span>/<span id="card-date__year">00</span>
                    </p>
                </div>
            </div>

            <div className="card card__back">
                <div id="dark-space"></div>
                <div id="card-cvc">000</div>
            </div>
        </section>
    );
}

export default Cards;