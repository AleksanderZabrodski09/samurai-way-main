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
import {Friends} from './components/Friends/Friends';
import {StoreType} from './redux/state';


type PropsType = {
  store: StoreType
  addPost: ()=>void
  upDateNewPostText:(newText:string)=>void
  addMessage:()=>void
  upDateNewMessageText:(newMessage:string)=>void
}


const App:React.FC<PropsType> = (props) => {
  const state=props.store.getState();
  return (

      <div className="app-wrapper">
        <Header/>
        <Navbar friends={state.sideBar.friends}/>
        <div className="appWrapperComponents">
          <Route path='/dialogs'
                 render={() => <Dialogs
                   dialogsPage={state.dialogsPage}
                   // messagesDate={props.state.dialogsPage}
                   addMessage={props.addMessage}
                   upDateNewMessageText={props.upDateNewMessageText}
                   newMessageText={state.dialogsPage.newMessageText}
                 />}/>
          <Route path='/profile' render={() => <Profile
            profilePage={state.profilePage}
            addPost={props.addPost}
            upDateNewPostText={props.upDateNewPostText}


          />}
          />
          <Route path='/news' render={() => <News/>}/>
          <Route path='/music' render={() => <Music/>}/>
          <Route path='/settings' render={() => <Settings/>}/>
          <Route path='/friends' render={() => <Friends friends={state.sideBar.friends}/>}/>
        </div>
      </div>

  );
}


export default App;
