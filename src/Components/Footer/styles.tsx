import styled from "styled-components";

export const Container = styled.footer`
   display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  background: ${({ theme }) => theme.colors.header};
  height: 50px;
`
