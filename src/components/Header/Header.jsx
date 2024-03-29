

import { StyledH2 } from "components/Cast/Cast.styled";
import Container from "../Container/Container";

import { StyledHeader, StyledNav, StyledUl, StyledLi, StyledNavLink } from "./Header.styled";

const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <StyledNav>
                    <StyledUl>
                        <StyledLi>
                            <StyledH2 to='/'>FilmExpert</StyledH2>
                        </StyledLi>
                        <StyledLi>
                            <StyledNavLink to='/'>Home</StyledNavLink>
                        </StyledLi>
                        <StyledLi>
                            <StyledNavLink to='/movies'>Movies</StyledNavLink>
                        </StyledLi>
                    </StyledUl>
                </StyledNav>
            </Container>
        </StyledHeader>
    )
}

export default Header;