import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // StrictMode desactivado — en desarrollo ejecuta los efectos dos veces
  // para detectar errores, lo que puede confundir al ver logs duplicados en consola

  //<StrictMode>
    <App />
  //</StrictMode>,
)
