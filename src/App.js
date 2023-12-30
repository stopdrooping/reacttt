import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';
import Dialogues from './components/dialogues/dialogues';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
        <Header/>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Profile}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/dialogues" component={Dialogues}/>
        </Switch>
    </div>

  );
}

export default App;