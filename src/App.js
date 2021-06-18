import Header from "./Header"
import MemeGenerator from "./MemeGenerator"
import Memes from "./Memes"
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
// import Events from './pages/events';
// import AnnualReport from './pages/annual';
// import Teams from './pages/team';
// import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import SignIn from './pages/signin';

// const token = localStorage.getItem("jwt")

function App() {
    return (
        <Router>
            <Navbar />
            <Header />
            {/* <MemeGenerator /> */}
            <Switch>
               
              <Route path='/' exact component={Home} />
              <Route path='/about' component={About} />
              {/* <Route path='/events' component={Events} />
              <Route path='/annual' component={AnnualReport} />
              <Route path='/team' component={Teams} />
              <Route path='/blogs' component={Blogs} /> */}
              <Route path='/sign-up' component={SignUp} />
              <Route path='/sign-in' component={SignIn} />
              <Route path='/MemeGenerator' component={MemeGenerator} />
              <Route path='/Memes' component={Memes} />
            </Switch>
        </Router>
        
    )
}

export default App
