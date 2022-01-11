import Mapa from './components/MapView';
import './App.css';
import Nav from './components/Nav';
import { Route, BrowserRouter as  Router } from 'react-router-dom';
import Form from './components/Form';
import Foot from './components/Footer';
import Nav2 from './components/Nav2';


function App() {
  return (
    
      <Router>
        
      <Route exact path="/" component={Nav} />
      <Route exact path="/" component={Mapa} />
      <Route exact path="/form" component={Nav2} />
      <Route exact path="/form" component={Form} />
      <Route  path="/" component={Foot} />
      
      </Router>
    
  );
}

export default App;
