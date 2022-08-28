import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {News} from './components/News/News';
import {StateType} from './redux/state';
import {Friends} from './components/Friends/Friends';


type PropsType = {
  state: StateType
  addPost: (postMessage:string)=>void
  upDateNewPostText:(newText:string)=>void
}

const App = (props: PropsType) => {
  return (

      <div className="app-wrapper">
        <Header/>
        <Navbar friends={props.state.sideBar.friends}/>
        <div className="appWrapperComponents">
          <Route path='/dialogs'
                 render={() => <Dialogs dialogsDate={props.state.dialogsPage.dialogsDate} messagesDate={props.state.dialogsPage.messagesDate}
                 />}/>
          <Route path='/profile' render={() => <Profile
            profilePage={props.state.profilePage}
            addPost={props.addPost}
            upDateNewPostText={props.upDateNewPostText}

          />}
          />
          <Route path='/news' render={() => <News/>}/>
          <Route path='/music' render={() => <Music/>}/>
          <Route path='/settings' render={() => <Settings/>}/>
          <Route path='/friends' render={() => <Friends friends={props.state.sideBar.friends}/>}/>
        </div>
      </div>

  );
}


export default App;
