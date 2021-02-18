import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import AdminContext from '../adminContext';
import FormCardLayout from '../layouts/FormCardLayout';
import { Form, InputGroup, Input, Label } from '../styles/FormStyles';

const AdminForm = ({ changeStep }) => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        saveAdminInfo(data);
        changeStep();
    };

    const { setAdminInfo } = useContext(AdminContext);

    const saveAdminInfo = ({ adminEmailRequired, adminPasswordRequired }) => {
        setAdminInfo({ adminEmailRequired, adminPasswordRequired })
    }

    return (
        <FormCardLayout>
            <Form id="submit-form" onSubmit={handleSubmit(onSubmit)} >
                <InputGroup>
                    <Label>Company Name <span>*</span> </Label>
                    <Input name="companyNameRequired" ref={register({ required: true })} color={errors.companyNameRequired ? "red" : ''} />
                </InputGroup>
                <InputGroup>
                    <Label>Company Email <span>*</span></Label>
                    <Input name="emailRequired" ref={register({ required: true })} color={errors.emailRequired ? "red" : ''} />
                </InputGroup>
                <InputGroup>
                    <Label>Admin Email<span>*</span></Label>
                    <Input name="adminEmailRequired" ref={register({ required: true })} color={errors.adminEmailRequired ? "red" : ''} />
                </InputGroup>
                <InputGroup>
                    <Label>Admin Password<span>*</span></Label>
                    <Input name="adminPasswordRequired" ref={register({ required: true })} color={errors.adminPasswordRequired ? "red" : ''} />
                </InputGroup>
            </Form>
        </FormCardLayout>
    );
}

export default AdminForm;
