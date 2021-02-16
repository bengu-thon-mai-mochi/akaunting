import React from 'react';
import { useHistory } from 'react-router-dom';
import LogoComponent from './LogoComponent';

const Header = () => {
    let history = useHistory();
    const { pathname } = history.location;

    return (
        <header>
            {
                pathname === '/wizard'
                    ? <h1>Wizard</h1>
                    : <LogoComponent />
            }
        </header>
    )
}

export default Header;
