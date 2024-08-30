import { useState } from 'react'
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './app.css';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/petsfriendlycafes" element={<Home />} />
      </Routes>
    </>

  )
}

export default App

//git add dist -f
//git commit -m "deploy"
//git subtree push --prefix dist origin gh-pages