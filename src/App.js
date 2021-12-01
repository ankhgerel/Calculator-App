import logo from './logo.svg'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter, Switch } from 'react-router-dom'
import Home from './pages/Home'

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Router exact path='/'>
            <Home />
          </Router>
        </Switch>
      </div>
    </BrowserRouter>
  );
}


