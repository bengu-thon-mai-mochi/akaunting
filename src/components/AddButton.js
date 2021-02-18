import styled from 'styled-components';

const Button = styled.input`
    display: none;
    cursor: pointer;
`
const Label = styled.label`
    border: 1px solid grey;
    display: inlineBlock;
    padding: 6px 12px;
    width: 8vh;
    cursor: pointer;
    font-size: 0.75rem;
    text-align: center;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-bottom: 1vh;
`

const AddButton = () => {
    return (
        <Wrapper>
            <Label htmlFor="file-upload">
                <Button type="file" id="file-upload" />
                Add New
            </Label>
        </Wrapper>
    )
}

export default AddButton;
