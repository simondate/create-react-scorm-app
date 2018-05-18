import React from 'react';

class CompleteButton extends React.Component {

    buttonClick() {
        this.props.completeActivity();
    }

    render() {
        return (<div>
            <p>Click the button to report completition to the LMS.</p>
            <button onClick={this.buttonClick.bind(this)}>Complete</button>
        </div>);
    };
};

export default CompleteButton;
