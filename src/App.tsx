import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {RootStateType} from './redux/state';
import {Friends} from './components/Friends/Friends';


type PropsType = {
 state:RootStateType
}


const App = (props: PropsType) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Navbar friends={props.state.sidebar.friends}/>

        {/*<Route path='/friends' render={() => <Navbar friends={props.state.sidebar}/>}/>*/}
        <div className="appWrapperContent">
          <Route path='/profile' render={() => <Profile postsDate={props.state.profilePage.posts}/>}/>
          <Route path='/dialogs' render={() => <Dialogs
            dialogs={props.state.dialogsPage.dialogsDate}
            messages={props.state.dialogsPage.messagesDate}
          />}/>
          <Route path='/news' render={() => <News/>}/>
          <Route path='/music' render={() => <Music/>}/>
          <Route path='/settings' render={() => <Settings/>}/>
          <Route path='/friends' render={() => <Friends  friends={props.state.sidebar.friends}/>}/>
        </div>
      </div>
    </BrowserRouter>
  )
}


export default App;
