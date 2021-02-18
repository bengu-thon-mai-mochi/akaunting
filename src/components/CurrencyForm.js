import { useState } from "react";
import { useForm } from "react-hook-form";
import FormCardLayout from '../layouts/FormCardLayout';
import CurrencyTableHeader from './CurrencyTableHeader';
import AddButton from './AddButton';
import EditableRateInput from './EditableRateInput';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction:column;
`

const List = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    width: 100%;
    margin-bottom: 12px;
`

const Input = styled.input`
    border: 1px solid gray;
`

const ListItem = styled.li`
    display: flex;
    justify-content: space-around;
`

const Cell = styled.span`
    display: flex;
    width: 100%;
`

const defaultContent = [
    {
        id: 1,
        name: 'British Pound',
        code: 'GBP',
        rate: 1.6,
        status: true,
        actions: "..."
    },
    {
        id: 2,
        name: 'Euro',
        code: 'EUR',
        rate: 1.25,
        status: true,
        actions: "..."
    },
    {
        id: 3,
        name: 'Turkish Lira',
        code: 'TRY',
        rate: 0.8,
        status: true,
        actions: "..."
    },
    {
        id: 4,
        name: 'US Dollar',
        code: 'USD',
        rate: 1,
        status: true,
        actions: "..."
    },
]

const CurrencyForm = ({ changeStep }) => {
    const { handleSubmit } = useForm();

    const [defaultValues, setDefaultValues] = useState(defaultContent);

    const headings = ["NAME", "CODE", "RATE", "ENABLED", "ACTIONS"];

    const onSubmit = () => {
        // Save defaultValues;
        changeStep();
    };

    const isEditEnabled = (id) => {

        const updatedStatus = defaultValues.map(data => {
            if (data.id === id) {
                return {
                    ...data,
                    status: !data.status
                };
            };
            return data;
        });

        setDefaultValues(updatedStatus)
    };

    const rewriteRate = (id, updatedRate) => {
        const updatedRateList = defaultValues.map(data => {
            if (data.id === id) {
                return {
                    ...data,
                    rate: updatedRate
                }
            }
            return data;
        });

        setDefaultValues(updatedRateList);
    };

    return (
        <FormCardLayout>
            <Form id="submit-form" onSubmit={handleSubmit(onSubmit)} >
                <AddButton />
                <CurrencyTableHeader headings={headings} />
                <List>
                    {defaultValues.map(data => {
                        return (
                            <ListItem key={data.id}>
                                <Cell>{data.name}</Cell>
                                <Cell>{data.code}</Cell>
                                <Cell>
                                    <EditableRateInput id={data.id} rate={data.rate} status={data.status} rewriteRate={rewriteRate} />
                                </Cell>
                                <Cell><Input type="checkbox" id="check" checked={data.status} onChange={() => isEditEnabled(data.id)} /></Cell>
                                <Cell>{data.actions}</Cell>
                            </ListItem>
                        )
                    })}
                </List>
            </Form>
        </FormCardLayout>
    );
}

export default CurrencyForm;
