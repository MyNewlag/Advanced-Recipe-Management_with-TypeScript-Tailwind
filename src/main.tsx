import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { RecipeContainer } from './context/RecipeContext.tsx'
import { Provider } from 'react-redux'
import store from './redux/ui-managment/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
       <BrowserRouter>
       <Provider store={store}>
        <RecipeContainer>
          <App />
        </RecipeContainer>
       </Provider>
      </BrowserRouter>
  </StrictMode>,
)
