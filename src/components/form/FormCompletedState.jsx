import iconComplete from '../../assets/images/icon-complete.svg';

const FormCompletedState = () => {
    return (
        <div id="complete-state">
            <img src={iconComplete} alt="" />
            <h1>Thank you!</h1>
            <p>We've added your card details</p>
            <button>Continue</button>
        </div>
    );
}
 
export default FormCompletedState;