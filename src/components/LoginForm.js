import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import AdminContext from '../adminContext'
import { Input, InputGroup } from '../styles/FormStyles';
import LoginFormFooter from './LoginFormFooter';

import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    background: white;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
`;

const LoginForm = () => {
    const { register, handleSubmit, errors } = useForm();

    let history = useHistory();

    const { adminInfo } = useContext(AdminContext);

    const onSubmit = (data) => {
        //Auth here 
        console.log(data)
        if (data) {
            history.push('/wizard');
        }
    };

    return (
        <Wrapper>
            <Content>
                <p style={{ 'text-align': 'center' }}>Login to start your session</p>
                <form id="submit-form" onSubmit={handleSubmit(onSubmit)} >
                    <InputGroup>
                        <Input name="emailRequired" value={adminInfo.adminEmailRequired} onChange={(e) => console.log(e.target.value)} ref={register({ required: true })} />
                        {errors.emailRequired && <span>*</span>}
                        <Input name="passRequired" value={adminInfo.adminPasswordRequired} onChange={(e) => console.log(e.target.value)} ref={register({ required: true })} />
                        {errors.emailRequired && <span>*</span>}
                    </InputGroup>
                    <LoginFormFooter text="Login" />
                </form>
                <div style={{ 'padding-top': '25px' }}>
                    <p>I forgot my password</p>
                </div>
            </Content>
        </Wrapper>
    );
}

export default LoginForm;
