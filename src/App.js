import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Learner from './components/Learner';
import Scorm from './scorm/Scorm';
import CompleteButton from './components/CompleteButton';
import Mcq from './components/Mcq';
import Components from './course/components.json';

const componentNames = {
  Mcq: Mcq
};

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

    // processJson() {
    //   console.log(Components);
    //   var value = "";
    //   Components.forEach(function(element){
    //     console.log(element);
    //     value += <Mcq result={this.updateAssesment.bind(this)} question="What is 10*10?" correctAnswer={0} answers={["100","20"]}/>;
    //   },this);
    //   console.log(Components[0])
    //   const ComponentName = componentNames[Components[0]._type];
    // //  return React.createElement(ComponentName, {result: "true", question:"What is 10*10?", correctAnswer:0, answers: [100,20]})
    //   return <ComponentName result={this.updateAssesment.bind(this)} question="What is 10*10?" correctAnswer={0} answers={["100","20"]}/>;
    // }

    renderComponent(index) {
      const ComponentName = componentNames[Components[index]._type];
      console.log(this)
      return <ComponentName result={this.updateAssesment.bind(this)} properties={Components[index]._properties}/>;
      //return React.createElement(ComponentName, Components[index]._properties, null);
    }

    updateAssesment(correct, response) {
        this.setState({assessment: this.state.assessment.concat([correct])});
        Scorm.submitMCQ(correct, response);
    }


    render() {
      const items = Components.map(function(item,index){
        return this.renderComponent(index);
      },this);
        return (<div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <Learner name={this.state.learnerName}/>
            </header>
            <main>
                { items }
                <CompleteButton completeActivity={this.finish.bind(this)}/>
            </main>
        </div>);
    }
}

// <Mcq result={this.updateAssesment.bind(this)} question="What is 10*10?" correctAnswer={0} answers={["100","20"]}/>
// <Mcq result={this.updateAssesment.bind(this)} question="What is the capital of Spain?" correctAnswer={2} answers={["Barcelona","Lisbon", "Madrid"]}/>
// <Mcq result={this.updateAssesment.bind(this)} question="Which US President's office commissioned the creation of SCORM?" correctAnswer={3} answers={["Donald Trump","Barack Obama", "Ronald Reagan", "Bill Clinton"]}/>

export default App;
