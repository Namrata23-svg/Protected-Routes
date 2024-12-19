import React ,{ useState } from 'react'
import './App.css'
import {Routes,BrowserRouter as Router, Navigate,Route} from "react-router-dom"
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

// componentDidMount() {
 
//   const isLoggedIn = localStorage.getItem('isloggedin') === 'true'; 
//   this.setState({ isLoggedin: isLoggedIn });
// }

  render() {
    //  const isLoggedin = localStorage.getItem('isloggedin');
    const{isLoggedin}=this.state;
      return(
        
  <div>
    <Router>
        <Routes>

        {/* <Route path="/login" element={<Loginpage/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/> */}
          
          <Route path="/login" element={isLoggedin ? <Navigate to ="/dashboard" />  : <Loginpage/>}/>

          <Route
            path="/dashboard"
            element={ isLoggedin ? <Dashboard/> : <Navigate to ="/login" />}
          />

         
          {/* <Route path="/" element={<Navigate to="/login" />} /> */}
        </Routes>
      </Router>
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
