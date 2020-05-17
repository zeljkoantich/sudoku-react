import React, { FC } from 'react';
import { CyDataAttributes as cy } from '../../../common';
import styled, { css } from 'styled-components';

interface IBlockCProps {
  colIndex: number;
  rowIndex: number;
}

const BlockComponent: FC<IBlockCProps> = ({ colIndex, rowIndex }) => {
  return (
    <Container data-cy={`${cy.BLOCK}-${rowIndex}-${colIndex}`}>
      {/* |{rowIndex}| */}
      {/* |{colIndex}| */}
    </Container>
  );
};
export default BlockComponent;

const Container = styled.div`
  ${ ({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.black};
    cursor: pointer;
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;
    font-size: 20px;
    font-weight: bold;
    height: auto;
    justify-content: center;
    transition: ${theme.transition};
    user-select: none;

    &:before { /* for responsive square blocks */
      padding-top: 100%;
      content: '';
      float: left;
    }

    &:hover {
      background-color: ${theme.colors["light-blue"]};
    }
  `}
`;
