import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default (props) => {
  const { numOfRemainingLives } = props;
  return (
    <div className="lives">
      <FavoriteIcon className={`lives-icon lives-icon-${numOfRemainingLives > 0 ? "live" : "dead"}`} />
      <FavoriteIcon className={`lives-icon lives-icon-${numOfRemainingLives > 1 ? "live" : "dead"}`} />
      <FavoriteIcon className={`lives-icon lives-icon-${numOfRemainingLives > 2 ? "live" : "dead"}`} />
    </div>
  );
}