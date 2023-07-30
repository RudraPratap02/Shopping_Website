import React, {useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import LogIn from './components/LogIn';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Checkout from './components/Checkout.js';
import { auth } from './firebase';
import { useStateValue } from './components/StateProvider';
import Payment from './components/Payment.js';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect( () => {
    //will only run when the app component loaded successfully
    auth.onAuthStateChanged(authUser => {
      console.log('THIS is the user>>>',   authUser);

      if(authUser) {
        //the user just logged in/ the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      }
      else {
        // the user is not logged in
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    //BEM Convention
    <Router>
      <div className="app">
      
        <Routes>
          <Route path="/login" element = {
            <LogIn />
          }/>
          <Route path="/" element={
            <><Header /><Home /></>
          }/>
          <Route 
            path='/checkout'
            element={<>
              <Header /><Checkout />
            </>} 
          />
          <Route 
            path='/payment'
            element={<>
              <Header /><Payment />
            </>} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
