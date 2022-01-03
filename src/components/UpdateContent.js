import React, { Component } from 'react';

class UpdateContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:this.props.content.id,
      title:this.props.content.title,
      desc:this.props.content.desc
    }
  }
  
  render() {
    return(
      <article>
        <h2>Update</h2>
        <form 
          action='' 
          method='POST'
          onSubmit={function(e){
            e.preventDefault();
            this.props.onSubmit(this.state.id, this.state.title, this.state.desc);
          }.bind(this)}
        >
          <p>
            <input 
              type='text' 
              name='title' 
              placeholder='title' 
              value={this.state.title} 
              onChange={function(e) {
                this.setState({title:e.target.value});
              }.bind(this)} />
          </p>
          <p>
            <textarea 
              type='text' 
              name='desc' 
              placeholder='description' 
              value={this.state.desc}
              onChange={function(e) {
                this.setState({desc:e.target.value});
              }.bind(this)}></textarea>
          </p>
          <p><input type='submit' value='update' /></p>
        </form>
      </article>
    );
  }
}

export default UpdateContent;