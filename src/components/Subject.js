import React, { Component } from 'react';

class Subject extends Component {
  render(){
    //제목, 설명 보여주기
    //web 클릭 > 홈화면 이동 및 welcome 보여주기
    //mode:welcome 으로 변경
    return (
      <header>
        <h1><a href='/' onClick={function(e){
          e.preventDefault();
          this.props.onChangeMode();
        }.bind(this)}>{this.props.subject.title}</a></h1>
        {this.props.subject.sub}
      </header>
    );
  }
}

export default Subject;