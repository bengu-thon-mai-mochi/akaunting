import styled from 'styled-components';

const List = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    background: gray;
`

const ListItem = styled.li`
    display: flex;
    justify-content: space-around;
`

const Cell = styled.span`
    display: flex;
    width: 100%;
`

const CurrencyTableHeader = ({ headings }) => {
    return (
        <List>
            <ListItem>{
                headings.map((heading, index) => <Cell key={index}>{heading}</Cell>)
            }
            </ListItem>
        </List>
    )
}

export default CurrencyTableHeader;
