import React, { FC } from 'react';
import { CyDataAttributes as cy } from '../../common';

const GridComponent: FC = () => {
  const rows = new Array(9);
  return (
    <div data-cy={cy.GRID_CONTAINER}>
      { [...rows].map((_, rowIndex) => GRID_ROW(rowIndex)) }
    </div>
  )
};
const GRID_ROW = (id: number) => {
  const blocks = new Array(9);
  return (
    <div data-cy={cy.GRID_ROW_CONTAINER} key={id}>row
      { [...blocks].map((_, columIndex) => GRID_BLOCK(columIndex)) }
    </div>
  );
};

const GRID_BLOCK = (id: number) => <div data-cy={cy.BLOCK} key={id}>block</div>;

export default GridComponent;
