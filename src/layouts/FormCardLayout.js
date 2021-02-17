import styled from 'styled-components';

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 20px;
    padding-left: 20px;
    margin-top: 20px;
`;

const FormCardLayout = ({ children }) => {
    return (
        <FormWrapper>
            {children}
        </FormWrapper>
    )
}

export default FormCardLayout;