import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>

            <Route path='/'element= {<Home/>}> 
            </Route>

            <Route path='/About'element= {<About/>}>
            </Route>

            <Route path='/Contact'element= {<Contact/>}>
            </Route>

          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
