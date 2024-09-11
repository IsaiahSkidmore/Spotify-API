import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.module.css'
import Display from './components/Display'
import Search from './components/Search'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Display />
    <Search />
  </StrictMode>,
)
