import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, RootStateType, updateNewTextMessage, updateNewTextPost} from './redux/state';
import {BrowserRouter} from 'react-router-dom';


export let rerenderEntireTree=(state:RootStateType)=>{
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
        addMessage={addMessage}
        updateNewTextPost={updateNewTextPost}
        updateNewTextMessage={updateNewTextMessage}
      />
    </BrowserRouter>,

    document.getElementById('root')
  );
}
