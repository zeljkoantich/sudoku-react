import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    height: 100%;

    body {
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      height: 100%;

      #root {
        background: radial-gradient(#282c34cc, #282c34);
        display: flex;
        font-family: sans-serif;
        height: 100%;
        justify-content: center;
        padding: 15px;
      }
    }
  }


`;
