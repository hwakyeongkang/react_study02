import React, { Component } from 'react';

class ReadContent extends Component {
  render() {
    return(
      <article>
        <h2>{this.props.content.title}</h2>
        {this.props.content.desc}
      </article>
    );
  }
}

export default ReadContent;