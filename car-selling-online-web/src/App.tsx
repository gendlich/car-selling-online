import Header from './components/header'
import React from "react";
import { AuthProvider } from './authContext';
import {
  BrowserRouter
} from 'react-router-dom'
import { Router } from './routes';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Router />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;