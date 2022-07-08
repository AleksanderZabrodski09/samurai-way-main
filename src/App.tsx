import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {News} from './components/News/News';
import { StateType} from './redux/state';


export type AppType = {
  state: StateType

}

const App = (props: AppType) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className="appWrapperComponents">
          <Route path='/dialogs'
                 render={() => <Dialogs dialogs={props.state.dialogsPage.dialogsDate} messages={props.state.dialogsPage.messagesDate}
                 />}/>
          <Route path='/profile' render={() => <Profile posts={props.state.profilePage.posts}/>}/>
          <Route path='/news' render={() => <News/>}/>
          <Route path='/music' render={() => <Music/>}/>
          <Route path='/settings' render={() => <Settings/>}/>
        </div>

      </div>
    </BrowserRouter>
  );
}


export default App;
