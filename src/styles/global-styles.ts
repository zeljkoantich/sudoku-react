import { createGlobalStyle, css } from 'styled-components';


export default createGlobalStyle`
  ${props => css`
    html {
      height: 100%;

      body {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        height: 100%;

        #root {
          background: ${props.theme.colors.background};
          display: flex;
          color: ${props.theme.colors.black}
          font-family: sans-serif;
          height: 100%;
          justify-content: center;
          padding: 15px;
        }
      }
    }
  `};
`;
