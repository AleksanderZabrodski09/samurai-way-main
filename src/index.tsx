import React from 'react';

import state, {subscribe} from './redux/state';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, RootStateType, updateNewTextMessage, updateNewTextPost} from './redux/state';
import {BrowserRouter} from 'react-router-dom';


let rerenderEntireTree=()=>{
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

rerenderEntireTree();
subscribe(rerenderEntireTree);