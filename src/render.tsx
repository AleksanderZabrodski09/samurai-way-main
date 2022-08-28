 import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
 import {addPost, StateType} from './redux/state';
 import {BrowserRouter} from 'react-router-dom';

// addPost('hello guys')

 export let renderEntireTree=(state:StateType)=>{
   ReactDOM.render(
     <BrowserRouter>
       <App
         state={state}
         addPost={addPost}
         // newTextChange={newTextChange}
       />
     </BrowserRouter>,
     document.getElementById('root')
   );
 }

