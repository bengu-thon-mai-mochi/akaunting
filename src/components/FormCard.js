import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import LanguageForm from './LanguageForm';
import FormFooter from './FormFooter';
import DatabaseForm from './DatabaseForm';
import AdminForm from './AdminForm';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 350px;
    border: 1px solid darkblue;
`;

const FormCard = ({ steps }) => {
    let history = useHistory();

    let [activeStep, setActiveStep] = useState(0);

    const changeStep = () => {
        if (activeStep === 2) {
            history.push('/login')
        } else {
            setActiveStep(activeStep + 1)
        }
    }

    return (
        <Wrapper>
            <ProgressBar activeStep={activeStep} steps={steps} />
            {activeStep === 0 && <LanguageForm changeStep={changeStep} />}
            {activeStep === 1 && <DatabaseForm changeStep={changeStep} />}
            {activeStep === 2 && <AdminForm changeStep={changeStep} />}
            <FormFooter text="Next" />
        </Wrapper>
    )
}

export default FormCard;
