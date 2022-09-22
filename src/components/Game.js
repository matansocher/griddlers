import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { isBoardCleared, resetBoard } from '../services/common_methods';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import * as actions from '../actions/index';

import Board from './Board';
import Lives from './Lives';
import Bottom from './Bottom';

class Game extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isGameFinished: false,
      currentAction: true
    }
  }

  componentDidMount() {
    this.props.onSetNumOfRemainingLives(3);
    if (!this.props.board || !this.props.board.length) {
      return this.props.history.push('/');
    }
  }

  navigateToRoute = (route) => {
    this.props.history.push(route);
  }

  actionChangeHandler = (action) => {
    this.setState({ currentAction: action });
  }

  resetBtnClickHandler = () => {
    const resetedBoard = resetBoard(this.props.board);
    this.props.onResetBoard(resetedBoard);
  }

  handleCellClick = (cell) => {
    const { currentAction } = this.state;
    const { shouldBeFilled } = cell;

    let cellStatus;
    if (currentAction !== shouldBeFilled) { // mistake
      
      cellStatus = !currentAction ? 1 : 2;

      const newNumOfRemainingLives = this.props.numOfRemainingLives - 1 < 0 ? 0 : this.props.numOfRemainingLives - 1;
      this.props.onSetNumOfRemainingLives(newNumOfRemainingLives);
      
      if (newNumOfRemainingLives === 0) {
        this.props.history.push('/');
      }
    } else {
      cellStatus = currentAction ? 1 : 2;
    }

    cell.status = cellStatus;
    this.props.onSetCell(cell);

    if (isBoardCleared(this.props.board)) {
      console.log("DONEEEEEEEEEEEEEE");
      this.setState({ isGameFinished: true });
    }
  }

  render() {
    return (
      <div className="container">

        <Link to="/">
          <ArrowBackIcon />
        </Link>

        <button className="btn reset-btn" onClick={this.resetBtnClickHandler}>Reset Game</button>

        <h2>Random Name</h2>

        <Lives numOfRemainingLives={this.props.numOfRemainingLives} />

        <Board 
          board={this.props.board} 
          difficulty={this.props.difficulty} 
          cellClickHandler={this.handleCellClick} 
          navigateToRoute={this.navigateToRoute} />  

        <Bottom 
          currentAction={this.state.currentAction} 
          actionChangeHandler={this.actionChangeHandler} />

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    board: state.board, 
    difficulty: state.difficulty,
    numOfRemainingLives: state.numOfRemainingLives
  };
}

function mapDispatchToProps(dispatch) {
  return {
     onSetBoard: (board) => dispatch(actions.setBoard(board)),
     onSetCell: (cell) => dispatch(actions.setCell(cell)),
     onSetNumOfRemainingLives: (numOfRemainingLives) => dispatch(actions.setNumOfRemainingLives(numOfRemainingLives)),
     onResetBoard: (resetedBoard) => dispatch(actions.resetBoard(resetedBoard))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);