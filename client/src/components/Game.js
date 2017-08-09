import React, { Component } from 'react';

class Game extends Component {
  render() {
    return (
      <div>
        Hello From Game
        {this.props.match.params.gameId}
      </div>
    );
  }
}

export default Game;