import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {PostType} from './components/Profile/MyPosts/Post/Post';

export type StateType = {
  dialogsDate: DialogsDateType[]
  messagesDate: MessagesDateType[]
  postsDate:PostType[]
}
// export type DialogsType =
//   DialogsDateType[]
//   | MessagesDateType[]
//

export type DialogsDateType = {
  id: number
  name: string
}
export type MessagesDateType = {
  id: number
  message: string
}
let dialogsDate = [
  {id: 1, name: 'Robert'},
  {id: 2, name: 'Andrzej'},
  {id: 3, name: 'Pawel'},
  {id: 4, name: 'Marek'},
  {id: 5, name: 'Barbara'},
  {id: 6, name: 'Jack'}
]

let messagesDate = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'How are you going?'},
  {id: 3, message: 'I am fine'},
  {id: 4, message: 'I am Ok'},
  {id: 5, message: 'I am great!'},
]

let postsDate = [
  {id: 1, message: "How are you?", likeCount: 19},
  {id: 2, message: "It's my first post", likeCount: 15}
]


ReactDOM.render(
  <App
    dialogsDate={dialogsDate}
    messagesDate={messagesDate}
    postsDate={postsDate}
  />,
  document.getElementById('root')
);