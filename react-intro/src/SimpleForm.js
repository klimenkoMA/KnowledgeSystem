import React, {useState} from 'react';
import Greetings from "./Greetings";
import useInputValidation from "./onBlur/OnBlur";


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
        <div
            style={{
                margin: 50,
                padding: 10,
                width: 300,
                border: "1px solid black",
                backgroundColor: "black",
                color: "white"
            }}>
            <div
                style={{marginBottom: 10}}
            >
                <label>
                    First name:
                    <input
                        style={{
                            backgroundColor: '#EFEFFF',
                            marginLeft: 10
                        }}
                        type="text"
                        name="firstName"
                        onChange={onFirstNameChange}
                        onBlur={() => onBlurFirst(firstName)}
                    />
                    {firstNameError &&
                    <div
                        style={{
                            color: 'red',
                            margin: 5
                        }}
                    >{firstNameError}</div>}
                </label>
            </div>
            <label>
                <div>Last name:</div>
                <input type="text"
                       name="lastName"
                       onChange={onLastNameChange}
                       onBlur={() => onBlurLast(lastName)}
                />
                {lastNameError &&
                <div
                    style={{
                        color: 'red',
                        margin: 5
                    }}
                >{lastNameError}</div>}
            </label>
            <Greetings firstName={firstName} lastName={lastName}/>
        </div>
    );
};

export default SimpleForm;