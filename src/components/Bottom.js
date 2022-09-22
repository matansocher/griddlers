import React from 'react';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

export default (props) => {

  const handleClick = (action) => {
    props.actionChangeHandler(action);
  }
  const { currentAction } = props;
  return (
    <div className="bottom">
      <CancelPresentationIcon 
        className={`action-item action-item-${!currentAction ? 'enabled' : 'disabled'}`}
        onClick={() => handleClick(false)} /> 
      <CheckBoxIcon 
        className={`action-item action-item-${currentAction ? 'enabled' : 'disabled'}`}
        onClick={() => handleClick(true)} />  
    </div>
  );
}