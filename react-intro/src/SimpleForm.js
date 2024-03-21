import React, {useState} from 'react';
import Greetings from "./Greetings";
import useInputValidation from "./onBlur/OnBlur";
import './styles/SimpleFormStyle.scss';


const SimpleForm = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const {error: firstNameError, onBlur: onBlurFirst} = useInputValidation();
    const {error: lastNameError, onBlur: onBlurLast} = useInputValidation();


    const onFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const onLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    return (
        <div className="simple-form">
            <div className="input-wrapper">
                <label className="label">
                    <div>First name:</div>
                    <input
                        className="input"
                        type="text"
                        name="firstName"
                        onChange={onFirstNameChange}
                        onBlur={() => onBlurFirst(firstName)}
                    />
                    {firstNameError && <div className="error-message">{firstNameError}</div>}
                </label>
            </div>
            <label className="label">
                <div>Last name:</div>
                <input
                    className="input"
                    type="text"
                    name="lastName"
                    onChange={onLastNameChange}
                    onBlur={() => onBlurLast(lastName)}
                />
                {lastNameError && <div className="error-message">{lastNameError}</div>}
            </label>
            <Greetings firstName={firstName} lastName={lastName}/>
        </div>
    );
};

export default SimpleForm;