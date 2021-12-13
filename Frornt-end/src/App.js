// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './login';
import { isLogin, logout } from './helper';
import { login } from './helper';
import FileUpload from './fileUpload';
export default  class App extends React.Component{
  state = {
    isLogin: isLogin(),
    jsonData: [],
    selectedFile : null
  }


  

  onSubmitLogin = (data) => {
    const {userName, password} = data;
    login(userName, password);
    this.setState({
      isLogin: isLogin()
    })
    this.fetchJsonData();
  }

  onLogout = () => {
    logout();
    this.setState({
      isLogin: isLogin()
    })
  }
  componentDidMount(){
    if(this.state.isLogin) {
      this.fetchJsonData();
    }
  }

  fetchJsonData = () => {
    fetch(`http://localhost:3000/getData`).then(res => res.json()).then(data => {
      this.setState({
        jsonData: data || []
      })
    })
  }


  showFile = async (e) => {
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = async (e) => { 
      const text = (e.target.result)
      console.log(text)
      alert(text)
    };
    reader.readAsText(e.target.files[0])
  
    
    // fetch('http://localhost:3000/upload',{
    //   method:'post',
    //   body:formData
    // }).then(res => res.json()).then(data => {
    //   this.setState({
    //     jsonData : data || []
    //   })
    // })
  }

  render(){
    return(
      <div>
        {!this.state.isLogin && 
        <Login onSubmitLogin=
        {this.onSubmitLogin} />}
        {this.state.isLogin && <FileUpload onChangeFile={this.showFile} jsonData={this.state.jsonData} />}
       
      
        

        
        
      </div>
    );
  }
}


