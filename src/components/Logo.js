import AkauntingLogo from '../assets/logo/akaunting-logo-white.svg';
import styled from 'styled-components';

const Image = styled.img`
    height: 10vh;
`

const Logo = () => <Image src={AkauntingLogo} alt="akaunting-logo" />

export default Logo;
