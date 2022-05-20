import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import UserDetail from './views/UserDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user-detail/:userId' element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
