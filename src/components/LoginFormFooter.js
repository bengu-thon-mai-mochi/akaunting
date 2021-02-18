import FormButton from './SubmitButton';
import styled from 'styled-components';

const FooterLayout = styled.div`
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
`

const LoginFormFooter = ({ text }) => {
    return (
        <FooterLayout>
            <div>
                <input type="checkbox" id="remember" name="remember" />
                <label htmlFor="remember">Remember Me</label>
            </div>
            <FormButton text={text} />
        </FooterLayout>
    )
}

export default LoginFormFooter;
