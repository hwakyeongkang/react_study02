import React, { Component } from 'react';

class TOC extends Component {
  //생성자 > 전달받은 데이터 가공
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(newProps, newState){
    if(this.props.content === newProps.content) {
      return false;
    }
    return true;
  }

  render() {
    this.content = this.props.content;
    this.lists = [];
    
    for(let i = 0; i < this.content.length; i++) {
      this.lists.push(
        <li key={this.content[i].id}>
          <a href={this.content[i].id + ".html"}
            data-id={this.content[i].id}
            onClick={function(e) {
              e.preventDefault();
              this.props.onChangeContent(e.target.dataset.id);
            }.bind(this)}>{this.content[i].title}
          </a>
        </li>
      );
    }

    return(
      <ul>
        {this.lists}
      </ul>
    );
  }
}

export default TOC;