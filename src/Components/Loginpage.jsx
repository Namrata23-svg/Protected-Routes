import React from 'react';
import { Navigate } from 'react-router-dom';
class Loginpage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            error:false,
            dashboard:false,
           
        }
    }
componentDidMount(){
    if(localStorage.getItem('isloggedin')==='true' && localStorage.getItem('username') && localStorage.getItem('password')){
        
this.setState({dashboard:true})
console.log("users")
    }
}


 loginButton=()=>{
    const{username,password}=this.state;

    if(username==='admin' && password==='admin'){
        localStorage.setItem('isloggedin', 'true');
     localStorage.setItem('username',username)
     localStorage.setItem('password',password)
    
     this.setState({dashboard:true})
   
    }
    else{
    this.setState({error:'Invalid credentials'})
    }
 }
 userChange=(e)=>{
    this.setState({username:e.target.value})
 }
 userPassword=(e)=>{
    this.setState({password:e.target.value})
 }

render() {
    const{username,password,error,dashboard}=this.state;
    if (dashboard) {
        console.log("dashboard", dashboard);
        
        return <Navigate to="/dashboard" />; 
        
      }
      
    return(
        
<div>
    
        <h1>Login Page</h1>
    
    
      <div>
        Name:
        <input  type="text" value={username} onChange={this.userChange}></input>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
        <div>

       Password:
         <input  type="text" value={password} onChange={this.userPassword}></input>
         {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>

        <button onClick={this.loginButton}>login</button>
        
</div>

    )
}
}
export default Loginpage;