import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';
import Dialogues from './components/dialogues/dialogues';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

function App(props) {
  return (
    <div className="wrapper">
        <Header/>
        <Navbar friends={props.state.friends}/>
        <Switch>
          <Route exact path="/" render={()=><Profile postsData={
            props.state.postsData} addPost={props.addPost}/>}/>
          <Route exact path="/profile" render={()=><Profile postsData={
            props.state.postsData} addPost={props.addPost}/>}/>
          <Route exact path="/dialogues" render={()=><Dialogues messageItems={
            props.state.messageItems} dialogNames={props.state.dialogNames}
            addMessage={props.addMessage}/>}/>
        </Switch>
    </div>

  );
}

export default App;