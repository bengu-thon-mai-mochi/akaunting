import React from "react";
import { useForm } from "react-hook-form";

const DatabaseForm = ({ changeStep }) => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        changeStep()
    };

    return (
        <form id="submit-form" onSubmit={handleSubmit(onSubmit)} >
            <label>Hostname</label>
            <input name="hostRequired" ref={register({ required: true })} />
            {errors.hostRequired && <span>*</span>}

            <label>Username</label>
            <input name="userRequired" ref={register({ required: true })} />
            {errors.userRequired && <span>*</span>}

            <label>Password</label>
            <input name="pass" ref={register} />

            <label>Database</label>
            <input name="dataRequired" ref={register({ required: true })} />
            {errors.dataRequired && <span>*</span>}
        </form>
    );
}

export default DatabaseForm;
