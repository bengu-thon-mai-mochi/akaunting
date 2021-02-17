import React from 'react';

const SubmitButton = ({ text, changeStep }) => {
    return (
        <button type="button" onClick={() => changeStep(text)}>
            {text}
        </button >
    )
}

export default SubmitButton;