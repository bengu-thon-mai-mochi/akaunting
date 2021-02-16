import Logo from '../assets/logo/akaunting-logo-white.svg';
import styled from 'styled-components';

const Image = styled.img`
    height: 10vh;
`

const LogoComponent = () => <Image src={Logo} alt="akaunting-logo" />

export default LogoComponent;
