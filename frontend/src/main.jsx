import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";

import RoutesComponent from './routes.jsx'

import VinylProvider from './pages/context/context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <VinylProvider>
      <BrowserRouter>
          <RoutesComponent />
      </BrowserRouter>
    </VinylProvider>
  </React.StrictMode>,
)
