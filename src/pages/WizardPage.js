import WizardForm from '../components/WizardForm';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 10vh;
`
const WizardPage = () => {
    return (
        <Div>
            <WizardForm />
        </Div>
    );
}

export default WizardPage;