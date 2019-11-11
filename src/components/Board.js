import React from 'react';

class Board extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="boardContainer">
        <input type="button" onClick={this.props.initQuestions.bind(this)} value="Play!" />
      </div>
    );
  }
}

export default Board;
