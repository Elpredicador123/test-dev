import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MouseFollower } from 'react-mouse-follower'
import ShopContextProvider from './context/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopContextProvider>
      <MouseFollower
        imageSrc='./assets/logo2.png'
        width={30}
        height={30}
        zIndex={9999}
        backgroundColor='transparent'
        followSpeed={0.1}
      />
    <App />
    </ShopContextProvider>
  </StrictMode>,
)
