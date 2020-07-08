import React,{Component} from 'react';
import axios from 'axios'
export default class Form extends Component{
    state = {
        username: ''
    }
    handleSubmit = async (event) => {
        event.preventDefault();
      axios.get(`https://api.github.com/users/${this.state.username}`).then(resp => {
        // do stuff
        console.log(resp.data)
        this.props.onSubmit(resp.data);
        this.setState({ username: '' });
    }).catch(err => {
        alert("Username Not Found")
        console.log(err);
    })
     
    };
    render(){
        return(
            <>
            <div className="input-group mb-3 justify-content-center">
  <div className="input-group-prepend">
    <span className="input-group-text" id="basic-addon1">@</span>
  </div>
  <form onSubmit={this.handleSubmit}>
             <input 
            type="text" 
            className ="form-control"
            aria-describedby="basic-addon1"
            aria-label="Username"
            value={this.state.username}
            onChange={event => this.setState({ username: event.target.value })}
            placeholder="GitHub username" 
            required 
          />
          </form>
          <div className="input-group-append">
    <button className="btn btn-primary" type="button">Add Card</button>
  </div>
</div>
</>

            
        )
    }
}