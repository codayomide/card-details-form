import { useState } from "react";

const FormInitialState = ({ onInputChange, formData, onSubmit, errors }) => {
    const [isPending, setIsPending] = useState(false);

    return (
        <form id="form" onSubmit={onSubmit}>
            <div className="input-container">
                <label htmlFor="Name">Cardholder Name</label>
                <input
                    type="text"
                    placeholder="e.g. Jane Appleseed"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={onInputChange}
                    maxLength={64}
                    style={errors.name ? {borderColor: 'hsl(0, 100%, 66%)'} : {borderColor: 'hsl(279, 6%, 55%)'}}
                />
                {errors.name && <p>{errors.name}</p>}
            </div>

            <div className="input-container">
                <label htmlFor="Number">Card Number</label>
                <input type="text"
                    placeholder="e.g. 1234 5678 9123 0000"
                    id="number"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={onInputChange}
                    maxLength={16}
                    style={errors.cardNumber ? {borderColor: 'hsl(0, 100%, 66%)'} : {borderColor: 'hsl(279, 6%, 55%)'}}
                />
                {errors.cardNumber && <p>{errors.cardNumber}</p>}
            </div>

            <div className="input-container__type-2">
                <div className="input-container">
                    <label htmlFor="Date">Exp. Date (MM/YY)</label>
                    <div>
                        <div id="date-input-container">
                            <input
                                type="number" 
                                placeholder="MM"
                                id="month"
                                name="month"
                                value={formData.month}
                                onChange={onInputChange}
                                min={0}
                                max={12}
                                maxLength={2}
                                style={errors.month ? {borderColor: 'hsl(0, 100%, 66%)'} : {borderColor: 'hsl(279, 6%, 55%)'}}
                            />
                            <input  
                                type="number"
                                placeholder="YY"
                                id="year"
                                name="year"
                                value={formData.year}
                                onChange={onInputChange}
                                min={0}
                                max={99}
                                maxLength={2}
                                style={errors.year ? {borderColor: 'hsl(0, 100%, 66%)'} : {borderColor: 'hsl(279, 6%, 55%)'}}
                            />
                        </div>
                        {errors.date && <p>{errors.date}</p>}
                    </div>
                </div>
                
                <div className="input-container">
                    <label htmlFor="CVC">CVC</label>
                    <input
                        type="text"
                        placeholder="e.g. 123"
                        name="cvc"
                        value={formData.cvc}
                        onChange={onInputChange}
                        maxLength={3}
                        style={errors.cvc ? {borderColor: 'hsl(0, 100%, 66%)'} : {borderColor: 'hsl(279, 6%, 55%)'}}
                    />
                    {errors.cvc && <p>{errors.cvc}</p>}
                </div>
            </div>

            <div id="btn-container">
                <button id="submit-btn">Confirm</button>
            </div>
        </form>
    );
}
 
export default FormInitialState;