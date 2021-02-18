import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction:column;
`

const InputGroup = styled.div`
    display: flex;
    flex-direction:column;
`

const Input = styled.input`
    border-color: ${props => props.color || "lightgray"};
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
    height: 24px;
    margin-bottom: 15px;
`

const Label = styled.label`
    font-size: 12px;
    font-weight: bold;
    color: gray;
    padding-bottom: 5px;
`
export { Form, InputGroup, Input, Label };