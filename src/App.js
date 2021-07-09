import React, {useState} from 'react';
import Header from "./Header"
import MemeGenerator from "./MemeGenerator"
import Memes from "./Memes"
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Home from './pages';
import About from './pages/about';
import SignUp from './pages/signup';
import SignIn from './pages/signin';

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
              <Route path='/sign-up' render={props => <SignUp {...props}/>} />
              <Route path='/sign-in' render={props => <SignIn {...props} setLoggedIn={setLoggedIn}/>} />
              <Route path='/MemeGenerator' render={props => <MemeGenerator {...props} loggedIn={loggedIn}/>}/>
              <Route path='/Memes' render={props => <Memes {...props}/>} />
            </Switch>
        </Router>
        
    )
}

export default App
