import { languagesArr } from '../helpers.js';
import styled from 'styled-components';

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
    ${props => props.selected || "palevioletred"};
`

const LanguageList = ({ selectedLang, handleClick }) => {
    return (
        languagesArr.map(lang =>
            <SelectButton key={lang.code} selected={`${lang.language === selectedLang ? "active" : ""}`} type="button" onClick={() => handleClick(lang.language)}>
                {lang.language}
            </SelectButton>)
    )
}

export default LanguageList;