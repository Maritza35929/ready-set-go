import React from 'react';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAnswer: null
    }
    this.continueButton = this.continueButton.bind(this);
  }
  selectAnswer(value) {
    this.setState({
      selectedAnswer: value
    });
  }
  continueButton() {
    console.log(this.state.selectedAnswer);
    console.log(this.props.item.correct);
    if (this.state.selectedAnswer == this.props.item.correct) {
      this.setState({
        selectedAnswer: null
      },()=>{
        this.props.nextLevel();
      });
    } else {
      this.props.playAgain();
    }
    document.getElementById('questionForm').reset();
  }
  render() {
    return (
      <div className="questionContainer">
        {this.props.allQuestions?
          <form id="questionForm">
            <h1>{this.props.item.question}</h1>
            <ul>
              {this.props.item.content.map((item,index)=>(
                <li key={index}>
                  <input defaultChecked={false} onClick={this.selectAnswer.bind(this,index)} id={'answer-'+index} name={'question-'+this.props.currentLevel} type="radio" />
                  <label htmlFor={'answer-'+index}>{item}</label>
                </li>
              ))}
            </ul>
            <input type="button" onClick={this.continueButton} value="Continue" disabled={this.state.selectedAnswer != null?false:true}/>
          </form>
          :null
        }
      </div>
    );
  }
}

export default Question;
