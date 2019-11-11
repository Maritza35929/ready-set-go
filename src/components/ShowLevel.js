import React from 'react';

class ShowLevel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="levelContainer">
        Level {this.props.currentLevel + 1}
      </div>
    );
  }
}

export default ShowLevel;
