import React from 'react';

class Login extends React.Component {
    state = {
        userName:"",
        password:""
      };

    onChangeLoginField = (e, name) => {
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }
    
    onClick = (e) => {
        e.preventDefault();
        const {userName, password} = this.state;
        this.props.onSubmitLogin({userName, password})
    }

    render() {
        return(
            <form>
              <div className = "main_container">
                    <div>
                       <span>User Name:</span>
                       <input onChange={(e) => this.onChangeLoginField(e, `userName`)} className = "input_wrapper" type = "text" placeholder="Enter your User Name" name = "userName" value = {this.state.userName} required ></input>
                    </div>
                    <div>
                         <span>Password:</span>
                         <input onChange={(e) => this.onChangeLoginField(e, `password`)} className = "input_wrapper" type = "password" placeholder = "Enter Your Password" name = "password"  value = {this.state.password} required></input>
                    </div>
                    <div>
                       <button onClick={this.onClick}>Login</button>
                    </div>
               </div>
            </form> 
        )
    }
}

export default Login;
