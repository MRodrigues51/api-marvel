import styled from 'styled-components'

export const Container = styled.main`
 color: ${({ theme }) => theme.colors.text};

`
export const SectionComics = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ListComics = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  text-align: center;

  padding-left: 20px;
  padding-right: 20px;
  div {
    border-radius: 5px;
    box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
    padding: 10px;
    transition: all 0.3s ease-out;

    background: ${({ theme }) => theme.colors.button};
    h2, p {
      margin-bottom: 0.5rem;
    }
    img {
      max-width: 300px;
      max-height: 300px;
    }
    footer {
      padding: 1rem;
      text-align: right;
    }
    &:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      transform: translateY(-4px);
    }
  }
`
export const SubTitle = styled.h3`
  padding: 1.5rem;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.text};
`
export const LinkComics = styled.h3`
  text-align: right;
  padding: 1.5rem;
  cursor: pointer;
`
