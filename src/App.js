import React, {useState, useEffect} from 'react';
import Header from "./Header"
import MemeGenerator from "./MemeGenerator"
import Memes from "./Memes"
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import SignUp from './pages/signup';
import SignIn from './pages/signin';
// import Logout from './pages/logout';

const isLoggedIn = localStorage.getItem("token")

function App() {
    const [ loggedIn, setLoggedIn ] = useState(isLoggedIn)

    console.log(loggedIn)
    return (
        <Router>
            <Header />
            <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/> 
            
            <Switch>
              
              
              <Route path='/' exact component={MemeGenerator} />
              <Route path='/about' component={About} />
              <Route path='/sign-up' component={SignUp} />
              <Route path='/sign-in' render={props => <SignIn {...props} setLoggedIn={setLoggedIn}/>} />
              {/* <Route path='/logout' component={Logout} /> */}
              <Route path='/MemeGenerator' render={props => <MemeGenerator {...props} loggedIn={loggedIn}/>}/>
              <Route path='/Memes' component={Memes} />
            </Switch>
        </Router>
        
    )
}

export default App
