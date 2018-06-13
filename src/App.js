import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Learner from './components/Learner';
import Scorm from './scorm/Scorm';
import CompleteButton from './components/CompleteButton';
import Mcq from './components/Mcq';

class App extends Component {

    constructor(props) {
        super(props);
        Scorm.init();
        this.state = {
            learnerName: Scorm.getLearnerName(),
            assessment: []
        }
    }

    finish() {
        Scorm.finish();
    }

    updateAssesment(correct, response) {
        this.setState({assessment: this.state.assessment.concat([correct])});
        Scorm.submitMCQ(correct, response);
    }


    render() {
        return (<div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <Learner name={this.state.learnerName}/>
            </header>
            <main>
                <Mcq result={this.updateAssesment.bind(this)} question="What is 10*10?" correctAnswer={0} answers={["100","20"]}/>
                <Mcq result={this.updateAssesment.bind(this)} question="What is the capital of Spain?" correctAnswer={2} answers={["Barcelona","Lisbon", "Madrid"]}/>
                <Mcq result={this.updateAssesment.bind(this)} question="Which US President's office commissioned the creation of SCORM?" correctAnswer={3} answers={["Donald Trump","Barack Obama", "Ronald Reagan", "Bill Clinton"]}/>
                <CompleteButton completeActivity={this.finish.bind(this)}/>
            </main>
        </div>);
    }
}

export default App;
