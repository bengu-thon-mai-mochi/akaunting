import React from "react";
import { useForm } from "react-hook-form";
import { Form, InputGroup, Input, Label } from '../styles/FormStyles'
import FormCardLayout from '../layouts/FormCardLayout';

const DatabaseForm = ({ changeStep }) => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        changeStep();
    };

    return (
        <FormCardLayout>
            <Form id="submit-form" onSubmit={handleSubmit(onSubmit)} >
                <InputGroup>
                    <Label>Hostname</Label>
                    <Input name="hostRequired" ref={register({ required: true })} />
                    {errors.hostRequired && <span>*</span>}
                </InputGroup>
                <InputGroup>
                    <Label>Username</Label>
                    <Input name="userRequired" ref={register({ required: true })} />
                    {errors.userRequired && <span>*</span>}
                </InputGroup>
                <InputGroup>
                    <Label>Password</Label>
                    <Input name="pass" ref={register} />
                </InputGroup>
                <InputGroup>
                    <Label>Database</Label>
                    <Input name="dataRequired" ref={register({ required: true })} />
                    {errors.dataRequired && <span>*</span>}
                </InputGroup>
            </Form>
        </FormCardLayout>
    );
}

export default DatabaseForm;
