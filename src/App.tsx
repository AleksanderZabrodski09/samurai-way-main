import React from 'react';
import './App.css';


const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img
          src="https://www.adobe.com/express/create/media_127a4cd0c28c2753638768caf8967503d38d01e4c.jpeg?width=400&format=webply&optimize=medium"
          alt="logo"/>
      </header>
      <nav className="nav">
        <div><a>Profile</a></div>
        <div><a>Messages</a></div>
        <div><a>News</a></div>
        <div><a>Music</a></div>
        <div><a>Settings</a></div>
      </nav>
      <main className="main">
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMPihIju0BBCwq0HWOFF-aZo8vlz2FCOl7fg&usqp=CAU"
               alt="image"/>
        </div>
        <div>ava+desc.</div>
        <div>my posts
          <div>new post</div>
        </div>
        <div>
          <div>post 1</div>
          <div>post 2</div>
        </div>
      </main>
    </div>
  );
}


export default App;
