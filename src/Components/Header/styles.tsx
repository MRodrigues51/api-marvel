import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  background: ${({ theme }) => theme.colors.header};
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
        border-bottom: 3px solid ${({ theme }) => theme.colors.background};
      }
      &:active {
        color: ${({ theme }) => theme.colors.background};
      }
    }
  }
`
