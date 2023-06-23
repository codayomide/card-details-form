import { useState } from "react";

const FormInitialState = () => {
    const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const date = {month, year};
    const [cvc, setCvc] = useState('');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const cardData = { name, cardNumber, date, cvc };
        console.log(cardData);
    }

    return (
        <form id="form" onSubmit={handleSubmit}>
            <div className="input-container">
                <label htmlFor="Name">Cardholder Name</label>
                <input
                    type="text"
                    placeholder="e.g. Jane Appleseed"
                    id="name"
                    name="name"
                    required
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="input-container">
                <label htmlFor="Number">Card Number</label>
                <input type="text"
                    placeholder="e.g. 1234 5678 9123 0000"
                    id="number"
                    name="number"
                    required
                    onChange={(e) => setCardNumber(e.target.value)}
                />
            </div>

            <div className="input-container__type-2">
                <div className="input-container">
                    <label htmlFor="Date">Exp. Date (MM/YY)</label>
                    <div>
                        <div id="date-input-container">
                            <input
                                type="text" 
                                placeholder="MM"
                                id="month"
                                name="mm"
                                required
                                onChange={(e) => setMonth(e.target.value)}
                            />
                            <input  
                                type="text"
                                placeholder="YY"
                                id="year"
                                name="yy"
                                required
                                onChange={(e) => setYear(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                
                <div className="input-container">
                    <label htmlFor="CVC">CVC</label>
                    <input
                        type="text"
                        placeholder="e.g. 123"
                        name="cvc"
                        required
                        onChange={(e) => setCvc(e.target.value)}
                    />
                </div>
            </div>

            <div id="btn-container">
                <button id="submit-btn">Confirm</button>
            </div>
        </form>
    );
}
 
export default FormInitialState;