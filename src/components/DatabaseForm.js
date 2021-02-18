import React from "react";
import { useForm } from "react-hook-form";
import { Form, InputGroup, Input, Label } from '../styles/FormStyles'
import FormCardLayout from '../layouts/FormCardLayout';

const DatabaseForm = ({ changeStep }) => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        //Save data
        changeStep();
    };

    return (
        <FormCardLayout>
            <Form id="submit-form" onSubmit={handleSubmit(onSubmit)} >
                <InputGroup>
                    <Label>Hostname <span>*</span></Label>
                    <Input name="hostRequired" ref={register({ required: true })} color={errors.hostRequired ? "red" : ''} />
                </InputGroup>
                <InputGroup>
                    <Label>Username <span>*</span></Label>
                    <Input name="userRequired" ref={register({ required: true })} color={errors.userRequired ? "red" : ''} />
                </InputGroup>
                <InputGroup>
                    <Label>Password</Label>
                    <Input name="pass" ref={register} />
                </InputGroup>
                <InputGroup>
                    <Label>Database <span>*</span></Label>
                    <Input name="dataRequired" ref={register({ required: true })} color={errors.dataRequired ? "red" : ''} />
                </InputGroup>
            </Form>
        </FormCardLayout>
    );
}

export default DatabaseForm;
