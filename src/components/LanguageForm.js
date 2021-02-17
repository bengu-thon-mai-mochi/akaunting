import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import { languagesArr } from '../helpers.js';
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

const SelectButton = styled.button`
    & {
        display: flex;
        padding-left: 20px;
        border: none;
        margin: 0;
        background: white;
        box-shadow: none;
    }
    &:active, &:focus  {
        border: none;
        background: gray;
        outline: 1px solid #fff;
    }
`

const LanguageForm = ({ changeStep }) => {
    const { handleSubmit } = useForm();

    const [selectedLang, setSelectedLang] = useState("English");

    const handleClick = (language) => {
        setSelectedLang(language)
    }

    const listItem = languagesArr.map(lang => <SelectButton className={`${lang.language === selectedLang ? "active" : ""}`} type="button" onClick={() => handleClick(lang.language)}>{lang.language}</SelectButton>)

    const onSubmit = (data) => {
        //Send selected data to somewhere
        changeStep();
    }

    return (
        <FormCardLayout>
            <form id="submit-form" onSubmit={handleSubmit(onSubmit)}>
                <ScrollableList>
                    {listItem}
                </ScrollableList>
            </form>
        </FormCardLayout>
    )
}

export default LanguageForm;
