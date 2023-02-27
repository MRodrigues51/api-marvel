import styled from "styled-components";

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
  background: ${({ theme }) => theme.colors.background};
`
