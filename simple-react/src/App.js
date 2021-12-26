import Mapa from './components/MapView';
import './App.css';
import Nav from './components/Nav';
import { Route, BrowserRouter as  Router } from 'react-router-dom';
import Form from './components/Form';


function App() {
  return (
    
      <Router>
        
      <Route  path="/" component={Nav} />
      <Route exact path="/" component={Mapa} />
      <Route exact path="/form" component={Form} />
      
      
      </Router>
    
  );
}

export default App;
