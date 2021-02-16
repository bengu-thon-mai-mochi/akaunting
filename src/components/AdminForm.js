import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import AdminContext from '../adminContext';

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
        <form id="submit-form" onSubmit={handleSubmit(onSubmit)} >
            <label>Company Name</label>
            <input name="companyNameRequired" ref={register({ required: true })} />
            {errors.companyNameRequired && <span>*</span>}

            <label>Company Email</label>
            <input name="emailRequired" ref={register({ required: true })} />
            {errors.emailRequired && <span>*</span>}

            <label>Admin Email</label>
            <input name="adminEmailRequired" ref={register({ required: true })} />
            {errors.adminEmailRequired && <span>*</span>}

            <label>Admin Password</label>
            <input name="adminPasswordRequired" ref={register({ required: true })} />
            {errors.adminPasswordRequired && <span>*</span>}
        </form>
    );
}

export default AdminForm;
