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
                    <Label>Company Name</Label>
                    <Input name="companyNameRequired" ref={register({ required: true })} />
                    {errors.companyNameRequired && <span>*</span>}
                </InputGroup>
                <InputGroup>
                    <Label>Company Email</Label>
                    <Input name="emailRequired" ref={register({ required: true })} />
                    {errors.emailRequired && <span>*</span>}
                </InputGroup>
                <InputGroup>
                    <Label>Admin Email</Label>
                    <Input name="adminEmailRequired" ref={register({ required: true })} />
                    {errors.adminEmailRequired && <span>*</span>}
                </InputGroup>

                <InputGroup>
                    <Label>Admin Password</Label>
                    <Input name="adminPasswordRequired" ref={register({ required: true })} />
                    {errors.adminPasswordRequired && <span>*</span>}
                </InputGroup>
            </Form>
        </FormCardLayout>
    );
}

export default AdminForm;
