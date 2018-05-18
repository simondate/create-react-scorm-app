import React from 'react';

class Mcq extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: 0
        }
    }

    handleOptionChange = (changeEvent) => {
      this.setState({
        selectedOption: Number(changeEvent.target.value)
      });
    }


    renderAnswers() {
        let context = this;
        return this.props.answers.map(function(answer, index) {
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
        if(this.state.selectedOption === this.props.correctAnswer)
            console.log('Correct');
        else
            console.log('Incorrect');
    }

    render() {
        return (<div className="Mcq">
            <p>{this.props.question}</p>
            <form onSubmit={this.handleFormSubmit.bind(this)}>
            {this.renderAnswers()}
            <button className="btn btn-default" type="submit">Save</button>
            </form>
        </div>);
    };
};

export default Mcq;
