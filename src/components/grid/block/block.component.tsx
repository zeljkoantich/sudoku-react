import React, { FC } from 'react';
import { CyDataAttributes as cy } from '../../../common';

interface IBlockCProps {
  colIndex: number;
  rowIndex: number;
}

const BlockComponent: FC<IBlockCProps> = ({ colIndex, rowIndex }) => {
  return (
    <div data-cy={cy.BLOCK}>
      |{rowIndex}|
      |{colIndex}|
      foo
    </div>
  );
};

export default BlockComponent;
