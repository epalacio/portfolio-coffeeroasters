import './index.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Subscribe from './pages/Subscribe'
import Navbar from './components/Navbar.component'
import Footer from './components/Footer.component'

function App() {
  return (
    <Router>
      <div className='App max-w-screen-xl mx-auto'>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/aboutUs'>
            <AboutUs />
          </Route>
          <Route path='/subscribe'>
            <Subscribe />
          </Route>     
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
