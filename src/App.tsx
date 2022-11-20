import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import { StoreType} from './redux/state';
import {Friends} from './components/Friends/Friends';


type PropsType = {
  store:StoreType
  // state: RootStateType
  addPost: () => void
  addMessage: () => void
  updateNewTextPost: (text: string) => void
  updateNewTextMessage: (text: string) => void
}


const App:React.FC<PropsType> = (props) => {
  const state=props.store.getState()
  return (
    <div className="app-wrapper">
      <Header/>
      <Navbar friends={state.sidebar.friends}/>

      {/*<Route path='/friends' render={() => <Navbar friends={props.state.sidebar}/>}/>*/}
      <div className="appWrapperContent">
        <Route path='/profile' render={() => <Profile
          profilePage={state.profilePage}
          addPost={props.addPost}
          updateTextPost={props.updateNewTextPost}
        />}/>
        <Route path='/dialogs' render={() => <Dialogs
          dialogs={state.dialogsPage.dialogsDate}
          messages={state.dialogsPage.messagesDate}
          newTextMessage={state.dialogsPage.newTextMessage}
          addMessage={props.addMessage}
          updateNewTextMessage={props.updateNewTextMessage}
        />}/>
        <Route path='/news' render={() => <News/>}/>
        <Route path='/music' render={() => <Music/>}/>
        <Route path='/settings' render={() => <Settings/>}/>
        <Route path='/friends' render={() => <Friends friends={state.sidebar.friends}/>}/>
      </div>
    </div>
  )
}



export default App;
