import React from 'react';

class ModalButton extends React.Component {

  lmsCheck() {
      if(this.props.name === "null") {
          return "It seems like we couldn't find your real name!"
      }
      return "";
  }

  render() {
    return (<div>
      <p>Hi, {this.props.name}!</p>
      <p>{this.lmsCheck()}</p>
  </div>);
  };
};

export default ModalButton;