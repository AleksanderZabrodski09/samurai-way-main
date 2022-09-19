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
import {StateType} from './index';
import {PostType} from './components/Profile/MyPosts/Post/Post';


// type PropsType = {
//   postsDate:PostType[]
//   dialogsDate: DialogsDateType[]
//   messagesDate: MessagesDateType[]
// }
type PropsType = StateType



const App = (props: PropsType) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className="appWrapperContent">
          <Route path='/profile' render={() => <Profile postsDate={props.postsDate}/>}/>
          <Route path='/dialogs' render={() => <Dialogs
            dialogs={props.dialogsDate}
            messages={props.messagesDate}
          />}/>
          <Route path='/news' render={() => <News/>}/>
          <Route path='/music' render={() => <Music/>}/>
          <Route path='/settings' render={() => <Settings/>}/>
        </div>
      </div>
    </BrowserRouter>
  )
}


export default App;
