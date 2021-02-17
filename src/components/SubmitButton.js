import React from 'react';

const SubmitButton = ({ text }) => {
    return (
        <button form="submit-form" type="submit">
            {text}
        </button >
    )
}

export default SubmitButton;
