import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import state, { addMessage, addPost, subscribe, updateNewPostText } from './redux/state'

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage}/>
    </BrowserRouter>
  );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);