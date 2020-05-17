import React, { FC, Children } from 'react';
import { CyDataAttributes as cy } from '../../common';
import styled from 'styled-components';
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
    <Row data-cy={cy.GRID_ROW_CONTAINER}>row
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
  display: flex;
  flex-flow: row;
`;
