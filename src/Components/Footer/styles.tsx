import styled from "styled-components";

export const Container = styled.footer`
   display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.header};
  height: 50px;
  p {
    text-align: justify-all;
    font-size: small;
  }
`
