import styled from 'styled-components';
import Links from './Links';
import Logo from './Logo';
import Actions from './actions/Actions';
const HeaderContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    position: relative;
`

const Header = () => {
    return (
        <HeaderContainer>
            <Links/>
            <Logo/>
            <Actions/>
        </HeaderContainer>
    );
  }
export default Header;