import React ,{ useState } from 'react'
import './App.css'
import {Routes,BrowserRouter , Navigate,Route} from "react-router-dom"
import Loginpage from './Components/Loginpage'
import Dashboard from './Components/Dashboard'



class App extends React.Component{
  constructor(props){
    super(props)
    const isLoggedin = localStorage.getItem('isloggedin') === 'true';
  
    this.state = {
      isLoggedin: isLoggedin,
    
       
    }
}

componentDidMount() {
  const isLoggedin = localStorage.getItem('isloggedin') === 'true';
  console.log("isLoggedIn in componentDidMount", isLoggedin);
  
 
  if (this.state.isLoggedin !== isLoggedin) {
    this.setState({isLoggedin});
  
    
  }
}


componentDidUpdate(prevProp, prevState){
  const isloggedin = localStorage.getItem('isloggedin');

  console.log("inside update");
  if(isloggedin === 'true' && prevState.isLoggedin !== this.state.isLoggedin){
    
    this.setState({isLoggedin: true})
  }
}

  render() {
    //  const isLoggedin = localStorage.getItem('isloggedin');
    const{isLoggedin}=this.state;

    
      return(
        
  <div>
    <BrowserRouter>
        <Routes>

        {/* <Route path="/login" element={<Loginpage/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/> */}
          
          <Route path="/login" element={isLoggedin ? <Navigate to ="/dashboard" />  : <Loginpage/>}/>

          <Route
            path="/dashboard"
            element={ isLoggedin ? <Dashboard/> : <Navigate to ="/login" />}
            // element={<Dashboard/>}

          />

         
          {/* <Route path="/" element={<Navigate to="/login" />} /> */}
        </Routes>
      </BrowserRouter>
  {/* <BrowserRouter>
  <Routes> 
    <Route>
    <ProtectedRoute path="/login" element={<Loginpage/>}/>
     <ProtectedRoute path="/dashboard" component={Dashboard} /> */}
          {/* <Navigate from="/" to="/login" /> 
   <Route path="/login" element={<Loginpage/>}/>
  <Route path="/Dashboard" element={<Dashboard/>}/>  */}
  {/* </Route>
   </Routes>
  </BrowserRouter>  */}
  </div>
  
      )
  }
  }
  

export default App
