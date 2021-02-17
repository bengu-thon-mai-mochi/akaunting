import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CompanyForm from './CompanyForm';
import CurrencyForm from './CurrencyForm';
import ProgressBar from './ProgressBar';
import SubmitButton from './SubmitButton';
import BrowseButton from './BrowseButton';
import TaxDashboard from './TaxDashboard';
import AppStore from './AppStore';
import styled from 'styled-components';

const WizardFormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 750px;
    border: 1px solid darkblue;
`;

const FooterLayout = styled.div`
    border-top: 1px solid lightgrey;
    padding-top: 4vh;
    padding-bottom: 2vh;
    padding-right: 2vh;
    padding-left: 2vh;
    display: flex;
`

const CompanyFooter = styled(FooterLayout)`
    justify-content: flex-end;
`;

const CurrencyFooter = styled(FooterLayout)`
    justify-content: space-between;
`;

const WizardForm = () => {
    let [activeStep, setActiveStep] = useState(0);

    let history = useHistory();

    const steps = ["Company", "Currencies", "Taxes", "Finish"]

    const changeStep = (text) => {
        if (text === "Previous") {
            setActiveStep(activeStep - 1);
        } else {
            setActiveStep(activeStep + 1);
        }
    }

    return (
        <WizardFormWrapper>
            <ProgressBar activeStep={activeStep} steps={steps} />

            {activeStep === 0 && <CompanyForm changeStep={changeStep} />}
            {activeStep === 0 && <CompanyFooter>
                <SubmitButton text="Save" />
                <SubmitButton text="Skip" />
            </CompanyFooter>}

            {activeStep === 1 && <CurrencyForm changeStep={changeStep} />}
            {activeStep === 1 && <CurrencyFooter>
                <BrowseButton text="Previous" changeStep={changeStep} />
                <SubmitButton text="Next" />
            </CurrencyFooter>}

            {activeStep === 2 && <TaxDashboard changeStep={changeStep} />}
            {activeStep === 2 && <CurrencyFooter>
                <BrowseButton text="Previous" changeStep={changeStep} />
                <BrowseButton text="Next" changeStep={changeStep} />
            </CurrencyFooter>}

            {activeStep === 3 && <AppStore changeStep={changeStep} />}
            {activeStep === 3 && <CurrencyFooter>
                <BrowseButton text="Previous" changeStep={changeStep} />
                <button onClick={() => history.push('/dashboard')}>Go to dashboard</button>
            </CurrencyFooter>}

        </WizardFormWrapper>
    )
}

export default WizardForm;