import Header from './components/header'
import React from "react";
import {
  BrowserRouter
} from 'react-router-dom'
import Login from './pages/login';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Login />
      </div>
    </BrowserRouter>
  );
}

export default App;