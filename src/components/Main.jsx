import Cards from "./Cards";
import { useState } from "react";
import FormInitialState from "./form/FormInitialState";
import FormCompletedState from "./form/FormCompletedState";

const Main = () => {
    const [validate, setValidate] = useState(false);
    
    return (
        <main id="main">
            <Cards />
            
            <section id="form-container">
                {validate
					? <FormCompletedState />
					: <FormInitialState />
				}
            </section>
        </main>
    );
}
 
export default Main;