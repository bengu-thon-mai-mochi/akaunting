import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './LanguageForm.css'
import { languagesArr } from '../helpers.js'


const LanguageForm = ({ changeStep }) => {
    const { register, handleSubmit } = useForm();

    const [selectedLang, setSelectedLang] = useState("English");

    const handleClick = (language) => {
        setSelectedLang(language)
    }

    const listItem = languagesArr.map(lang => <button type="button" onClick={() => handleClick(lang.language)}><li key={lang.code}>{lang.language}</li></button>)

    const onSubmit = (data) => {
        //Send selected data to somewhere
        changeStep();
    }

    return (
        <form id="submit-form" onSubmit={handleSubmit(onSubmit)}>
            <ul>
                {listItem}
            </ul>
        </form>
    )
}

export default LanguageForm;
