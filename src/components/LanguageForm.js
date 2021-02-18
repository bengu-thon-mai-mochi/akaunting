import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import LanguageList from './LanguageList';
import FormCardLayout from '../layouts/FormCardLayout';

const ScrollableList = styled.div`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    border: 1px solid lightgray;
    width: 100%;
    max-height: 200px;
    margin-bottom: 12px;
    overflow-y: scroll;
`

const LanguageForm = ({ changeStep }) => {
    const { handleSubmit } = useForm();

    const [selectedLang, setSelectedLang] = useState("English");

    const handleClick = (language) => {
        setSelectedLang(language)
    }

    const onSubmit = () => {
        //Send selected selectedLang to somewhere
        console.log(selectedLang)
        changeStep();
    }

    return (
        <FormCardLayout>
            <form id="submit-form" onSubmit={handleSubmit(onSubmit)}>
                <ScrollableList>
                    <LanguageList handleClick={handleClick} selectedLang={selectedLang} />
                </ScrollableList>
            </form>
        </FormCardLayout>
    )
}

export default LanguageForm;
