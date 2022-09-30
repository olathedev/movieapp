import Home from './Components/Pages/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import HomeNav from './Components/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Details from './Components/Pages/Details';
import Tv from './Components/Pages/Tv';
import Reviews from './Components/Pages/Reviews';
import SearchPage from './Components/Pages/Search';
import NotFound from './Components/Pages/NotFound';

function App() {
  return (
    <Router>
    <div className="App bg-dark text-white">
      <HomeNav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/details/:id/:type">
            <Details />
          </Route>
          <Route path="/tv">
            <Tv />
          </Route>
          <Route path="/reviews/:id/:type">
            <Reviews />
          </Route>
          <Route path="/search/:query">
            <SearchPage />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      
      
    </div>
    </Router>
  );
}

export default App;
