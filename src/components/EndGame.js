import React from 'react';

class EndGame extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="congrats">
        Congratulations!<br/>
        you win the game<br/>
        <input type="button" value="Play again!" onClick={this.props.playAgain()} />
      </div>
    );
  }
}

export default EndGame;
