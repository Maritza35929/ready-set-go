import React from 'react';
import './App.css';
import './css/Question.css';
import './css/Board.css';
import './css/ShowLevel.css';
import Question from './components/Question.js';
import ShowLevel from './components/ShowLevel.js';
import EndGame from './components/EndGame.js';
import Board from './components/Board.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allQuestions: null,
      currentLevel: 0
    }
    this.nextLevel = this.nextLevel.bind(this);
    this.playAgain = this.playAgain.bind(this);
    this.initQuestions = this.initQuestions.bind(this);
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
  nextLevel() {
    this.setState({
      currentLevel: this.state.currentLevel +1
    },()=>console.log(this.state.currentLevel))
  }
  playAgain() {
    this.setState({
      currentLevel: 0
    })
  }
  render() {
    let items = this.state.allQuestions?
                  this.state.currentLevel < this.state.allQuestions.games.length?
                    this.state.allQuestions.games[this.state.currentLevel].questions
                  :null
                :null
    let item = this.state.allQuestions && items ?items[Math.floor(Math.random()*items.length)]:null;
    return (
      <div className="App">
        {
          this.state.allQuestions?
            this.state.currentLevel == this.state.allQuestions.games.length?
              <EndGame
                playAgain={this.playAgain}/>
            :
              <div>
                <ShowLevel
                  currentLevel={this.state.currentLevel}/>
                <Question
                  allQuestions={this.state.allQuestions}
                  item={item}
                  currentLevel={this.state.currentLevel}
                  nextLevel={this.nextLevel}
                  playAgain={this.playAgain} />
              </div>
          :
            <Board initQuestions={this.initQuestions} />
        }
      </div>
    );
  }
}

export default App;
