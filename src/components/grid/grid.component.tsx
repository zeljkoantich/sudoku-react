import React, { FC, Children } from 'react';
import { CyDataAttributes as cy } from '../../common';

const GridComponent: FC = () => {
  const rows = new Array(9);
  return (
    <div data-cy={cy.GRID_CONTAINER}>
      {
        Children.toArray( // for unique keys (instead of array index)
          [...rows].map(() => GRID_ROW())
        )
      }
    </div>
  )
};
const GRID_ROW = () => {
  const blocks = new Array(9);
  return (
    <div data-cy={cy.GRID_ROW_CONTAINER}>row
      {
        Children.toArray( // for unique keys (instead of array index)
          [...blocks].map(() => GRID_BLOCK())
        )
      }
    </div>
  );
};

const GRID_BLOCK = () => <div data-cy={cy.BLOCK}>block</div>;

export default GridComponent;
