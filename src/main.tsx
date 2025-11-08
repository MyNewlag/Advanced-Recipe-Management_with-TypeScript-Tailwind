import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { RecipeContainer } from './context/RecipeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
       <BrowserRouter>
       <RecipeContainer>
         <App />
       </RecipeContainer>
      </BrowserRouter>
  </StrictMode>,
)
