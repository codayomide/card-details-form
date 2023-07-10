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

    const [errors, setErrors] = useState({})


    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = {};

        if (!formData.name) {
            validationErrors.name = `Can't be blank`;
        }

        if (!formData.cardNumber) {
            validationErrors.cardNumber = `Can't be blank`;
        } else if (!/[0-9]*/.test(formData.cardNumber)) {
            validationErrors.cardNumber = 'Wrong format, numbers only';
        } else if (formData.cardNumber.length < 16) {
            validationErrors.cardNumber = 'Too short';
        }

        if (!formData.month) {
            validationErrors.month = `Can't be blank`;
        }

        if (!formData.year) {
            validationErrors.year = `Can't be blank`;
        }

        if (!formData.month || !formData.year) {
            validationErrors.date = `Can't be blank`;
        }

        if (!formData.cvc) {
            validationErrors.cvc = `Can't be blank`
        } else if (!/[0-9]*/.test(formData.cvc)) {
            validationErrors.cardNumber = 'Wrong format, numbers only'
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setValidate(true);
        }
    }
    
    return (
        <main id="main">
            <Cards formData={formData} />
            
            <section id="form-container">
                {validate
					? <FormCompletedState />
					: <FormInitialState 
                        onInputChange={handleInputChange}
                        formData={formData}
                        onSubmit={handleSubmit}
                        errors={errors}
                    />
				}
            </section>
        </main>
    );
}
 
export default Main;