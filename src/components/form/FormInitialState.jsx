import { useState } from "react";

const FormInitialState = ({ onInputChange, formData }) => {
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
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
                    value={formData.name}
                    required
                    onChange={onInputChange}
                    maxLength={64}
                />
            </div>

            <div className="input-container">
                <label htmlFor="Number">Card Number</label>
                <input type="text"
                    placeholder="e.g. 1234 5678 9123 0000"
                    id="number"
                    name="cardNumber"
                    value={formData.cardNumber}
                    required
                    onChange={onInputChange}
                    maxLength={19}
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
                                name="month"
                                value={formData.month}
                                required
                                onChange={onInputChange}
                                maxLength={2}
                            />
                            <input  
                                type="text"
                                placeholder="YY"
                                id="year"
                                name="year"
                                value={formData.year}
                                required
                                onChange={onInputChange}
                                maxLength={2}
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
                        value={formData.cvc}
                        required
                        onChange={onInputChange}
                        maxLength={3}
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