import React from 'react';

class Mcq extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: 0,
            answered: false
        }
    }

    handleOptionChange = (changeEvent) => {
      this.setState({
        selectedOption: Number(changeEvent.target.value)
      });
    }


    renderAnswers() {
        let context = this;
        return this.props.properties.answers.map(function(answer, index) {
            return <div className="answer" key={index}>
                  <input type="radio" value={index}
                    checked={context.state.selectedOption === index}
                        onChange={context.handleOptionChange} />
                <label>
                  {answer}
                </label>
            </div>;
        });
    }

    handleFormSubmit(formSubmitEvent) {
        formSubmitEvent.preventDefault();
        this.setState({answered: true});
        this.props.result(this.state.selectedOption === this.props.properties.correctAnswer, this.props.properties.answers[this.state.selectedOption]);
    }

    currentState() {
        if(!this.state.answered) {
            return <form onSubmit={this.handleFormSubmit.bind(this)}>
            {this.renderAnswers()}
            <button className="btn btn-default" type="submit">Submit</button>
        </form>;
        } else {
            return <div>{this.checkCorrectAnswer()}</div>
        }
    }

    checkCorrectAnswer() {
        if(this.state.selectedOption === this.props.properties.correctAnswer) {
            return `yes, ${this.props.properties.answers[this.props.properties.correctAnswer]} is the correct answer.`;
        } else {
            return `You answered ${this.props.properties.answers[this.state.selectedOption]}. Sorry, but the correct answer is ${this.props.properties.answers[this.props.properties.correctAnswer]}.`
        }
    }

    render() {
        return (
            <div className="Mcq">
            <p>{this.props.properties.question}</p>
            {this.currentState()}
        </div>);
    };
};

export default Mcq;
