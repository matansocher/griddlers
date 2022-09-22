import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { generateRandomBoard, getBoardSizeByDifficulty } from '../services/common_methods';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {

  }

  navigationToGame = (difficulty) => {
    this.props.onSetDifficulty(difficulty);

    const size = getBoardSizeByDifficulty(difficulty);
    const defaultBoard = generateRandomBoard(size);
    this.props.onSetBoard(defaultBoard);
    
    this.props.history.push('/game');
  }

  renderDifficultyBtns = () => {
    const difficulties = ['easy', 'medium', 'hard', 'expert'];
    return difficulties.map(difficulty => {
      return (
        <button key={difficulty} className={`btn ${difficulty}`} onClick={() => this.navigationToGame(difficulty)}>
          {difficulty}
        </button>
      )
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Griddlers</h1>
        <div className="difficulty-btns">
          {this.renderDifficultyBtns()}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSetDifficulty: (difficulty) => dispatch(actions.setDifficulty(difficulty)),
    onSetBoard: (board) => dispatch(actions.setBoard(board))
  }
}

export default connect(() => {return {}}, mapDispatchToProps)(App);