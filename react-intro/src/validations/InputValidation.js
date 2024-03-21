import React from 'react';

const InputValidation = name => {
    const regex = /[A-Za-zА-Яа-я]{3,}/;

    return !regex.test(name)
        ? "Need >= 3 ch & Letters only"
        : "";
};

export default InputValidation;