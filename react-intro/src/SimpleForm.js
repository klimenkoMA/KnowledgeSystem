import React, {useState} from 'react';
import Greetings from "./Greetings";

const SimpleForm = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const onFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const onLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    return (
        <div>
            <div>
                <input type="text" name="firstName" onChange={onFirstNameChange}/>
            </div>
            <input type="text" name="lastName" onChange={onLastNameChange}/>
            <Greetings firstName={firstName} lastName={lastName}/>
        </div>
    );
};

export default SimpleForm;