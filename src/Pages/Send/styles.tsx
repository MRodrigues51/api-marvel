import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: space-between;
  margin: 2rem;
  height: 100vh;
  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
    margin: 0.5rem
  }
  .address {
    visibility: hidden;
    box-sizing: border-box;
    border: 1px border transparent;
    width: 240px;
    height: 32px;
    padding: 0 12px;
    border-radius: 4px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    font-size: 1rem;
    outline: none;
    text-overflow: ellipsis;
    position: absolute;
    left: 50%;
    margin-left: -120px;
    margin-top: 12px;
  }
`
export const ContainerMap = styled.div`
  width: 70%;
  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`
export const ContainerForm = styled.div`
  width: 30%;

  button {
    margin-top: 0.5rem;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    gap: 1rem;
  }
`
export const Form = styled.div`
  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 50%;
  }
`
export const BoxInfoSend = styled.div`
  background: ${({ theme }) => theme.colors.modal};
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  gap: 0.2rem;
  img {
    width: 150px;
    height: auto;
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 50%;
  }
`
