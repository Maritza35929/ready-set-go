import React from 'react';

class EndGame extends React.Component {
  constructor(props) {
    super(props);
    this.continue = this.continue.bind(this)
  }
  continue() {
    this.props.playAgain();
  }
  render() {
    return (
      <div className="congrats">
        <h1>Congratulations!<br/>
        you win the game</h1>
        <input type="button" value="Play again!" onClick={this.continue} />
      </div>
    );
  }
}

export default EndGame;
