import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import AdminContext from '../adminContext'
import FormButton from "./FormButton";


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

    console.log(adminInfo)

    return (
        <form id="submit-form" onSubmit={handleSubmit(onSubmit)} >

            <input name="emailRequired" value={adminInfo.adminEmailRequired} onChange={(e) => console.log(e.target.value)} ref={register({ required: true })} />
            {errors.emailRequired && <span>*</span>}

            <input name="passRequired" value={adminInfo.adminPasswordRequired} onChange={(e) => console.log(e.target.value)} ref={register({ required: true })} />
            {errors.emailRequired && <span>*</span>}

            <FormButton text="Login" />
        </form>
    );
}

export default LoginForm;