import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/background/login.png';

const Background = styled.div`
    background-image: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
`;

const Layout = ({ children }) => {
    return (
        <Background>
            {children}
        </Background>
    )
}

export default Layout;
