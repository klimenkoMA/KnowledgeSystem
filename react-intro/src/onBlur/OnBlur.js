import { useState } from 'react';
import InputValidation from '../validations/InputValidation';

const useInputValidation = () => {
    const [error, setError] = useState("");

    const onBlur = (inputValue) => {
        const error = InputValidation(inputValue);
        setError(error);
    };

    return { error, onBlur };
};

export default useInputValidation;
