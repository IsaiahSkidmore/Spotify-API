import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.module.css'
import Display from './components/Display'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Display />
  </StrictMode>,
)
