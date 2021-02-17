import React from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo'

const HeaderPosition = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    padding-top: 10vh;
    > * {
        margin-bottom: 3vh;
    }
`
const HeaderLayout = ({ children }) => {
    return (
        <HeaderPosition>
            <Logo />
            {children}
        </HeaderPosition>
    )
}

export default HeaderLayout;