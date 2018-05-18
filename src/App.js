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
            learnerName: Scorm.getLearnerName()
        }
    }

    finish() {
        Scorm.finish();
    }

    render() {
        return (<div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <Learner name={this.state.learnerName}/>
            </header>
            <main>
                <CompleteButton completeActivity={this.finish.bind(this)}/>

                <Mcq question="What is 10*10" correctAnswer={0} answers={["100","20"]}/>
            </main>
        </div>);
    }
}

export default App;
