import styled from 'styled-components';
import VSF from '../img/VSF.svg';

const LogoContainer = styled.div `
    width: 50%;
    display: flex;
    justify-content: center;
`

const Logo = () => {
    return (
        <LogoContainer>
            <img src={VSF}></img>
        </LogoContainer>
    );
}

export default Logo;