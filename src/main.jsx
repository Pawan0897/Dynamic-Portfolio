import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './Style/Style.css'
import 'animate.css';
import { BrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout.jsx'

createRoot(document.getElementById('root')).render(
  
  <BrowserRouter >
  <StrictMode>
    <Layout />
  </StrictMode>
  </BrowserRouter>
)
