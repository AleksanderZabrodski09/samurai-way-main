import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            <Header/>
            <Technologies/>
        </div>
    );
}
function Technologies() {
    return (
        <div>
            <ul>
                <li>html</li>
                <li>css</li>
                <li>ts</li>
                <li>react</li>
            </ul>
        </div>
    )
}

function Header() {
    return (
        <div>
            <a href="#s">Home</a>
            <a href="#s">New Feed</a>
            <a href="#s">Message</a>
        </div>
    )
}


export default App;
