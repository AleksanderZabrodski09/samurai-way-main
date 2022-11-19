import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/state';
import {BrowserRouter} from 'react-router-dom';


export let renderEntireTree=()=>{
  ReactDOM.render(
    <BrowserRouter>
      <App
        store={store}
        addPost={store.addPost.bind(store)}
        upDateNewPostText={store.upDateNewPostText.bind(store)}
        addMessage={store.addMessage.bind(store)}
        upDateNewMessageText={store.upDateNewMessageText.bind(store)}
      />
    </BrowserRouter>,
    document.getElementById('root')
  );
}

store.subscribe(renderEntireTree);
renderEntireTree();

