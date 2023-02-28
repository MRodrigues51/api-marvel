import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;


  }
  body {
    background: ${(props) => props.theme.colors.background};
  }
  body, input, p, a, button {
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSizes.normal};
    font-family: ${(props) => props.theme.fonts};
  }
  button {
    color:#fff;
    background-color: ${({ theme }) => theme.colors.button};
    outline: none;
    border: 0;
    color: #fff;
    padding:10px 20px;
    text-transform:uppercase;
    margin-top:10px;
    border-radius:2px;
    cursor:pointer;
    position:relative;
  }
  input {
      background: ${({ theme }) => theme.colors.modal};
      border:0;
      border-bottom:1px solid #555;
      background:transparent;
      width:100%;
      padding:8px 0 5px 0;
      font-size:0.8rem;
      color:#fff;
    &:focus {
      border:none;
      outline:none;
      border-bottom:1px solid #e74c3c;
    }
}
  .modalContent {
    background: ${({ theme }) => theme.colors.modal};
    width: 95%;
    height: auto;
    align-items: center;
    margin: 2.5%;
    justify-content: center;
    padding: 1rem;
    border-radius: 5px;
  }
`
