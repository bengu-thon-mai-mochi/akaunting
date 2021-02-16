import React from 'react';

const FormButton = ({ text }) => {
    return (
        <button form="submit-form" type="submit" >
            {text}
        </button>
    )
}

export default FormButton;
