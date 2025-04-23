import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Import Slick Carousel CSS directly
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// Import main CSS
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
