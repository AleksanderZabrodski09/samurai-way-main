import React from 'react';

import state from './redux/state';
import {rerenderEntireTree} from './render';


rerenderEntireTree(state)
// ReactDOM.render(
//   <BrowserRouter>
//     <App
//       state={state}
//       addPost={addPost}
//       addMessage={addMessage}
//     />
//   </BrowserRouter>,
//
//   document.getElementById('root')
// );