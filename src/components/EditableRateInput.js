import React from 'react';
import { useForm } from "react-hook-form";
import styled from 'styled-components';

const Input = styled.input`
    width: 80%;
    border: 1px solid lightgray;
`

const EditableRateInput = ({ id, rate, status, rewriteRate }) => {
    const { register } = useForm();

    const updateRate = (e) => {
        const updatedRate = e.target.value;
        rewriteRate(id, updatedRate)
    }

    return (
        !status
            ?
            <span>
                <Input form="submit-form" name="rate" defaultValue={rate} onChange={(e) => updateRate(e)} ref={register} />
            </span>
            :
            <span>{rate}</span>
    )

}

export default EditableRateInput;