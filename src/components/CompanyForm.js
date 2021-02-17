import { useForm } from "react-hook-form";
import FormCardLayout from '../layouts/FormCardLayout';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction:column;
`

const InputGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Pane = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
`

const Input = styled.input`
    border: 1px solid lightgray;
    border-radius: 3px;
    height: 24px;
`

const Label = styled.label`
    font-size: 12px;
    font-weight: bold;
    color: gray;
    padding-bottom: 5px;
`
const CompanyForm = ({ changeStep }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        // SAVE DATA
        changeStep();
    };

    return (
        <FormCardLayout>
            <Form id="submit-form" onSubmit={handleSubmit(onSubmit)} >

                <Label>API Key</Label>
                <Input name="apiKey" ref={register} />
                <p style={{ 'fontSize': '9px' }}>Click here to get your API key</p>

                <InputGroup>
                    <Pane>
                        <Label>Tax Number</Label>
                        <Input name="taxNumber" ref={register} />
                    </Pane>
                    <Pane>
                        <Label>Financial Year Start</Label>
                        <Input name="financialYearStart" ref={register} />
                    </Pane>
                </InputGroup>

                <Label>Adress</Label>
                <Input name="address" ref={register} />

                <Label>Logo</Label>
                <Input name="logo" ref={register} />

            </Form>
        </FormCardLayout>
    );
}

export default CompanyForm;
