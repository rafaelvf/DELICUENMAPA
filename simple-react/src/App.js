import Mapa from './components/MapView';
import './App.css';
import Nav from './components/Nav';
import { Route, BrowserRouter as  Router } from 'react-router-dom';
import Form from './components/Form';
import Foot from './components/Footer';


function App() {
  return (
    
      <Router>
        
      <Route  path="/" component={Nav} />
      <Route exact path="/" component={Mapa} />
      <Route exact path="/form" component={Form} />
      <Route  path="/" component={Foot} />
      
      </Router>
    
  );
}

export default App;
