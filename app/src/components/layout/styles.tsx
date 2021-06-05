import styled, { css } from "styled-components"
import { Link } from "gatsby"

export const CenterContainer = styled.div`
  margin: var(--spacing-0) auto;
  max-width: var(--maxWidth-wrapper);
  padding: var(--spacing-10) var(--spacing-5);
`

export const Container = styled.div`
  /* background-color: aquamarine; */
`

export const MainContent = styled.main`
  background: linear-gradient(
    0.85deg,
    rgba(234, 116, 31, 0.25) -7.66%,
    rgba(234, 165, 31, 0.16) 87.3%
  );
  min-height: 90vh;
`

export const Header = styled(CenterContainer)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  /* background-color: yellow; */
  img {
    height: 50px;
  }
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  a {
    padding-left: 15px;
  }

  svg {
    vertical-align: middle;
  }
`

function verifyIfIsCurrentPage(props) {
  return props.to === location.pathname
}

export const Navlink = styled(Link)`
  color: #141315;
  font-weight: 400;

  ${props =>
    verifyIfIsCurrentPage(props) &&
    css`
      text-decoration: underline;
      font-weight: 600;
      font-style: italic;
    `}
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  span,
  a {
    font-size: var(--fontSize-0);
    font-weight: 500;
  }
`
