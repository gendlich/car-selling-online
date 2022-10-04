import Header from './components/header'
import React from "react";
import {
  BrowserRouter
} from 'react-router-dom'
import { Router } from './routes';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;