import React from 'react';

class CompleteButton extends React.Component {

    buttonClick() {
        this.props.completeActivity();
    }

    render() {
        return (<div>
            <p>Click me to report completition to SCORM</p>
            <button onClick={this.buttonClick.bind(this)}>Complete</button>
        </div>);
    };
};

export default CompleteButton;
