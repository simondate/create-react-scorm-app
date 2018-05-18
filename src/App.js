import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Learner from './components/Learner';
import Scorm from './scorm/Scorm';
import CompleteButton from './components/CompleteButton';

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
    return (
      <div className="App">
        <header className="App-header">
          <Learner name={this.state.learnerName} />
        </header>
        <CompleteButton completeActivity={this.finish.bind(this)}/>
      </div>
    );
  }
}

export default App;
