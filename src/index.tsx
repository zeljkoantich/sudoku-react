import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from 'core/service-worker';
import { GlobalStyles, MainTheme } from 'styles';
import { ThemeProvider } from 'styled-components';
import { Content, Title, Card } from 'custom-styled-components';
import { GridComponent } from 'components';
import { CyDataAttributes as cy } from 'common';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={MainTheme}>
      <GlobalStyles />
      <Content data-cy={cy.CONTENT}>
        <Title data-cy={cy.TITLE} >Sudoku</Title>
        <Card data-cy={cy.CARD}>
          <GridComponent />
        </Card>
      </Content>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
