import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  background: ${({ theme }) => theme.colors.header};
  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding-left: 1rem;
    padding-right: 1rem;
    a{
      font-size: small;
    }
  }
  nav {
    display: flex;
    gap: 2.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;

      color: ${({ theme }) => theme.colors.text};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${({ theme }) => theme.colors.button};
      }
      &:active {
        color: ${({ theme }) => theme.colors.button};
      }
    }
  }
`
export const Logo = styled.img`
  width: 90px;
  align-items: center;
`
