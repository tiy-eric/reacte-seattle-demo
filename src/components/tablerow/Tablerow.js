import React, { Component } from 'react';
import './Tablerow.css';

class Tablerow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.nickname}</td>
      </tr>
    );
  }
}

export default Tablerow;