import React from 'react';
import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainLayout from './layout/MainLayout';
import s from 'src/assets/scss/layout/MainLayout.module.scss'
function App() {
  return (
    <div className={s.App}>
      <MainLayout />
    </div>
  );
}

export default App;
