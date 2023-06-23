const FormInitialState = () => {
    return (
        <form id="form">
            <div className="input-container">
                <label htmlFor="Name">Cardholder Name</label>
                <input
                    type="text"
                    placeholder="e.g. Jane Appleseed"
                    id="name"
                    name="name"
                />
            </div>

            <div className="input-container">
                <label htmlFor="Number">Card Number</label>
                <input type="text"
                    placeholder="e.g. 1234 5678 9123 0000"
                    id="number"
                    name="number"
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
                            />
                            <input  
                                type="text"
                                placeholder="YY"
                                id="year"
                                name="yy"
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