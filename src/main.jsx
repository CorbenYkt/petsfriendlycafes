import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import { APIProvider } from '@vis.gl/react-google-maps';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Router>
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} libraries={['marker']}>
      {console.log(import.meta.env.VITE_GOOGLE_MAPS_API_KEY)}
      <App />
    </APIProvider >
  </Router>
  // </StrictMode>,
)
