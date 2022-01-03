import React, { Component } from 'react';
import Subject from './components/Subject';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import Control from './components/Control';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import './App.css';

class App extends Component {
  //생성자,state
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode:'welcome',
      selected_content_id:2,
      subject:{title:'WEB', sub:'world wide web!'},
      welcome:{title:'Welcome', desc:'Hello, React!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }

  //selected_content_id에 해당하는 content 가져오기
  getContent() {
    let _contents = this.state.contents;
    let _content = null;
    for(let i = 0; i < _contents.length; i++) {
      if(_contents[i].id === this.state.selected_content_id) {
        _content = _contents[i];
      }
    }
    return _content;
  }

  //mode마다 다른 content불러오기(welcome, read, create, update, delete)
  getReadContent() {
    let mode = this.state.mode;
    let _contents, _content, _article = null;
    if(mode === 'welcome') {
      _article = <ReadContent content={this.state.welcome}></ReadContent>
    }else if(mode === 'read') {
      _content = this.getContent();
      _article = <ReadContent content={_content}></ReadContent>
    }else if(mode === 'create') {
      _article = <CreateContent onSubmit={function(_title, _desc){
        this.max_content_id += 1;
        _contents = Array.from(this.state.contents);
        _contents.push({
          id:this.max_content_id, 
          title:_title, 
          desc:_desc
        });
        this.setState({
          contents:_contents,
          mode:'read',
          selected_content_id:this.max_content_id
        });
      }.bind(this)}></CreateContent>
    }else if(mode === 'update') {
      _content = this.getContent();
      _article = <UpdateContent content={_content} onSubmit={function(_id, _title, _desc){
        _contents = Array.from(this.state.contents);
        for(let i = 0; i < _contents.length; i++) {
          if(_id === _contents[i].id) {
            _contents[i] = {id:_id, title:_title, desc:_desc};
          }
        }
        this.setState({
          contents:_contents,
          mode:'read',
          selected_content_id:_id
        });
      }.bind(this)}></UpdateContent>
    }
    return _article;
  }

  render() {
    return (
      <div className="App">
        <Subject 
          subject={this.state.subject} 
          onChangeMode={function() {
            this.setState({mode:'welcome'});
          }.bind(this)}>
        </Subject>

        <TOC 
          content={this.state.contents} 
          onChangeContent={function(_id) {
            this.setState({mode:'read'});
            this.setState({selected_content_id:Number(_id)});
          }.bind(this)}>
        </TOC>

        <Control
          onChangeMode={function(_mode) {
            if(_mode === 'delete') {
              if(window.confirm('delete')) {
                let _contents = Array.from(this.state.contents);
                for(let i = 0; i < _contents.length; i++) {
                  if(this.state.selected_content_id === _contents[i].id) {
                    _contents.splice(i, 1);
                  }
                }
                this.setState({
                  contents:_contents,
                  mode:'welcome'
                });
              }
            }else {
              this.setState({mode:_mode});
            }
          }.bind(this)}>
        </Control>

        {this.getReadContent()}
      </div>
    );
  }
}

export default App;