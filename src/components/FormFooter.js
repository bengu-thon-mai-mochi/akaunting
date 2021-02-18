import SubmitButton from './SubmitButton';
import styled from 'styled-components';

const FooterLayout = styled.div`
    border-top: 1px solid lightgrey;
    paddingTop: 4vh;
    padding-bottom: 2vh;
    padding-right: 2vh;
    display: flex;
    justify-content: flex-end;
`

const FormFooter = ({ text }) => {
    return (
        <FooterLayout>
            <SubmitButton text={text} />
        </FooterLayout>
    )
}

export default FormFooter;
