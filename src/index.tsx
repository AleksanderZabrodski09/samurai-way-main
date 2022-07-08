 import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
 import {state} from './redux/state';

 // let dialogsDate=[
 //   {id:1, name:'Robert'},
 //   {id:2, name:'Andrzej'},
 //   {id:3, name:'Pawel'},
 //   {id:4, name:'Marek'},
 //   {id:5, name:'Barbara'},
 //   {id:6, name:'Jack'}
 // ];
 //
 // let messagesDate=[
 //   {id:1, message:'Hi'},
 //   {id:2, message:'How are you going?'},
 //   {id:3, message:'I am fine'}
 // ];
 //
 // let posts =[
 //   {id:1, message :"How are you?", likeCount: 19},
 //   {id:2, message :"It's my first post?", likeCount: 15}
 // ];

ReactDOM.render(
    <App
      state={state}
      // dialogs={state.dialogsDate}
      // messages={state.messagesDate}
      // posts={state.posts}
    />,
  document.getElementById('root')
);