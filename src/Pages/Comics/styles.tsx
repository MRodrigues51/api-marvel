import styled from "styled-components";

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
  align-items: center;
  justify-content: space-around;

`

export const Card = styled.div`
  width: 250px;
  border: 1px solid gray;
  border-radius: 5px;
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 1rem;
  overflow: hidden;
  box-shadow: 0px 0px 5px gray;
  cursor: pointer;

  &:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  transform: translateY(-4px);
  }
`;

export const CardTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
  max-height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const CardImage = styled.img`
width: 100%;
height: 300px;
object-fit: fill;
`;

export const ModalContent = styled.div`
  background: ${({ theme }) => theme.colors.modal};
  height: calc(100vh - 20vh);
  overflow-y: scroll;
  h2 {
    margin-bottom: 1rem;
  }
  img {
    max-height: 400px;
  }
`
export const ModalHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap:1rem;

  button {
    padding: 0.3rem;
  }

`
export const ModalSection = styled.section`
  display: flex;
  gap: 1.5rem;
  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
    img {
      width: fit-content;
    }
  }
`
export const Button = styled.div`
  margin-top: 2rem;
  background: ${({ theme }) => theme.colors.modal};
  margin: 0.5rem;
  gap: 1rem;
  button {
    margin-top: 0.5rem;
  }
  input {
    background: ${({ theme }) => theme.colors.modal};

  }
  form {
    display: flex;
    flex-direction: column;
    width: 30vw;

  }
`
