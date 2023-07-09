import Cards from "./Cards";
import { useState } from "react";
import FormInitialState from "./form/FormInitialState";
import FormCompletedState from "./form/FormCompletedState";

const Main = () => {
    const [validate, setValidate] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        cardNumber: '',
        month: '',
        year: '',
        cvc: ''
    });


    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    
    return (
        <main id="main">
            <Cards formData={formData} />
            
            <section id="form-container">
                {validate
					? <FormCompletedState />
					: <FormInitialState 
                        onInputChange={handleInputChange}
                        formData={formData}
                    />
				}
            </section>
        </main>
    );
}
 
export default Main;