import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allQuestions: null,
      currentLevel: 0
    }
  }
  componentDidMount() {
    this.initQuestions();
  }
  initQuestions() {
    fetch('https://raw.githubusercontent.com/Maritza35929/Who-Wants-to-Be-a-Millionaire/master/questions.json')
    .then(response => {
      return response.json();
    })
    .then((data)=> {
      console.log(data);
      this.setState({
        allQuestions: data
      })
    });
  }
  render() {
    let items = this.state.allQuestions?this.state.allQuestions.games[this.state.currentLevel].questions:null
    let item = this.state.allQuestions?items[Math.floor(Math.random()*items.length)]:null;
    return (
      <div className="App">
        {this.state.allQuestions?
          items[0].question
          :null
        }
      </div>
    );
  }
}

export default App;
