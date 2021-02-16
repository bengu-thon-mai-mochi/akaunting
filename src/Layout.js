import React from 'react';
import styled from 'styled-components';
import backgroundImage from './assets/background/login.png';
import Header from './components/Header';

const Background = styled.div`
    background-image: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    background-position: calc(100% + 10px);
    display: grid;
    place-items: center;
`;

const Layout = ({ children }) => {

    return (
        <Background id="root">
            <Header />
            {children}
        </Background>
    )
}

export default Layout;
