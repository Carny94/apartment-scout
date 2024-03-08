import React from 'react';
import  { signUp } from '../../utilities/users-service'

export default class AuthorizationModal extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
      };
    
    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
          error: ''
        });
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const {name, email, password} = this.state
            const formData = {name,email,password};
            const user = await signUp(formData);
            console.log(user);
        }catch {
            this.setState({ error: " sign up failed - try again "})
        }
    }
      

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
    <div>
     <div className="form-container">
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <label>name</label>
          <input 
          type="text" 
          name="name" 
          value={this.state.name} 
          onChange={this.handleChange} 
          required />
          
          <label>email</label>
          <input 
          type="email" 
          name="email" 
          value={this.state.email} 
          onChange={this.handleChange} 
          required />
          
          <label>password</label>
          <input 
          type="password" 
          name="password" 
          value={this.state.password} 
          onChange={this.handleChange} 
          required />

          <label>confirm</label>
          <input 
          type="password" 
          name="confirm" 
          value={this.state.confirm} 
          onChange={this.handleChange} 
          required />
          
          <button type="submit" disabled={disable}>SIGN UP</button>
        </form>
     </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
    </div>
    );
  }
}
