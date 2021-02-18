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
        //Input change is missing for the form
        console.log(data)
        if (data) {
            history.push('/wizard');
        }
    };

    return (
        <Wrapper>
            <Content>
                <p style={{ 'textAlign': 'center' }}>Login to start your session</p>
                <form id="submit-form" onSubmit={handleSubmit(onSubmit)} >
                    <InputGroup>
                        <Input name="emailRequired" value={adminInfo.adminEmailRequired} onChange={(e) => console.log(e.target.value)} ref={register({ required: true })} color={errors.emailRequired ? "red" : ''} />
                        <Input name="passRequired" value={adminInfo.adminPasswordRequired} onChange={(e) => console.log(e.target.value)} ref={register({ required: true })} color={errors.passRequired ? "red" : ''} />
                    </InputGroup>
                    <LoginFormFooter text="Login" />
                </form>
                <div style={{ 'paddingTop': '25px' }}>
                    <p>I forgot my password</p>
                </div>
            </Content>
        </Wrapper>
    );
}

export default LoginForm;
