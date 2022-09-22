import React from 'react';

export default (props) => {

  const getCellClass = () => {
    const { status } = props.cell;
    const cellAdditionClass = getCellClassByStatus(status);
    // const cellAdditionClass = props.cell.shouldBeFilled ? ' full' : ' empty'; // this line is to show the board on  startup
    return `cell${cellAdditionClass}`;
  }

  const getCellClassByStatus = (status) => {
    switch (status) {
      case 1: 
        return ' full';
      case 2: 
        return ' empty';
      default: 
        return '';
    }
  }

  const handleClick = () => {
    const { cell, cellClickHandler } = props;
    if (cell.status !== 0) {
      return;
    }
    cellClickHandler(cell);
  }

  const cellClass = getCellClass();
  return (
    <div
      onClick={handleClick}
      className={cellClass} 
    />
  );
}