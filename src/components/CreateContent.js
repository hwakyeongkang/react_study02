import React, { Component } from 'react';

class CreateContent extends Component {
  render() {
    return(
      <article>
        <h2>Create</h2>
        <form 
          action='' 
          method='POST'
          onSubmit={function(e){
            e.preventDefault();
            this.props.onSubmit(e.target.title.value, e.target.desc.value);
          }.bind(this)}
        >
          <p><input type='text' name='title' placeholder='title' /></p>
          <p><textarea type='text' name='desc' placeholder='description'></textarea></p>
          <p><input type='submit' value='create' /></p>
        </form>
      </article>
    );
  }
}

export default CreateContent;