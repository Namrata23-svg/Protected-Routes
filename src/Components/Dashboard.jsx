import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Navigate } from 'react-router-dom';
class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[],
            login:false,
            error:null,
            username:'',
            password:''

        }
    }
    fetchData=()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
      
        .then((response)=>{
          if(!response.ok){
            throw new Error("Network response was not ok");
            }
            return response.json();  
          })
          .then((data) => {
           
    
            this.setState({
              data: data,  
              
            });
          })
          .catch((error) => {
            this.setState({
              error: error,  
            });
        })
      }
    componentDidMount(){
        // this.fetchData()
        
        if (localStorage.getItem('isloggedin') === 'true') {
            this.setState({ login: false },this.fetchData());
        } else {
            this.setState({ login: true });
        }
    
     
    }

    
logout=()=>{
  
    localStorage.removeItem('isloggedin')
    localStorage.removeItem('username')
    localStorage.removeItem('password')
    //  this.setState({isloggedin:false})
    // this.setState({login:true})
    this.setState({ login: true });
}
render(){
    const{data,error,login}=this.state;
    if(login){
        return <Navigate to="/login"/>
    }
    return(
<div>
<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          
          <Button color="inherit" onClick={this.logout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
 {
    data.map((index)=>(
        <div key={index.id}>
            <p>{index.id}</p>
            <p>{index.name}</p>
            <p>{index.username}</p>
            <p>{index.email}</p><p>{index.address.street}</p>
            <p>{index.address.suite}</p><p>{index.address.city}</p>
            <p>{index.address.zipcode}</p>
            <p>{index.address.geo.lat}</p>
            <p>{index.address.geo.lng}</p>

        </div>
    ))

    
 }
</div>
    )
}
}

export default Dashboard;