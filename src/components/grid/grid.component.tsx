import React, { FC, Children } from 'react';
import { CyDataAttributes as cy } from '../../common';
import styled, { css } from 'styled-components';
import BlockComponent from './block/block.component';

const GridComponent: FC = () => {
  const rows = new Array(9);
  return (
    /* Children.toArray: for unique keys (instead of array index) */
    <Container data-cy={cy.GRID_CONTAINER}>
      {Children.toArray([...rows].map((_, rowIndex) => GRID_ROW(rowIndex)))}
    </Container>
  )
};
export default GridComponent;

const GRID_ROW = (rowIndex: number) => {
  const blocks = new Array(9);
  return (
    /* Children.toArray: for unique keys (instead of array index) */
    <Row data-cy={cy.GRID_ROW_CONTAINER}>
      {Children.toArray([...blocks].map((_, colIndex) => (
        <BlockComponent colIndex={colIndex} rowIndex={rowIndex} />
      )))}
    </Row>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

const Row = styled.div`
  ${ ({ theme }) => css`
    display: flex;
    flex-flow: row;

    &:first-child {
      div {
        border-top: 4px solid ${theme.colors.black};
      }
    }
    &:nth-child(3),
    &:nth-child(6) {
      div {
        border-bottom: 3px solid ${theme.colors.black};
      }
    }
    &:last-child {
      border-bottom: 4px solid ${theme.colors.black};
    }

    /* side borders */
    div {
      &:first-child {
        border-left: 4px solid ${theme.colors.black};
      }
      &:last-child {
        border-right: 4px solid ${theme.colors.black};
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        border-right: 4px solid ${theme.colors.black};
      }
      &:nth-child(4),
      &:nth-child(7) {
        border-left: none;
      }
    }
  `}
`;
