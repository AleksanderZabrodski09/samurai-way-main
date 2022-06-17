import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import s from './components/Dialogs/Dialogs.module.css';
import {BrowserRouter, Route} from 'react-router-dom';


const App = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      <BrowserRouter>
        <div className="appWrapperContent">
          <Route path='/dialogs' component={Dialogs}/>
          <Route path='/profile' component={Profile}/>
          {/*<Profile/>*/}
          {/*<Dialogs/>*/}
        </div>
      </BrowserRouter>


    </div>
  );
}


export default App;
