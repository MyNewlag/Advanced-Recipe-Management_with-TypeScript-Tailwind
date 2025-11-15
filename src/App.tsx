
import Header from "./layout/header/Header"
import Content from "./layout/content/Content"
import AppContainer from "./components/container/AppContainer"


function App() {

    
  return (
    <AppContainer>
      <div className=" elative z-50 top-9 right-2 left-2 max-w-[90%] sm:max-w-[85%] 
      m-auto pt-2">

            <Header/>
            <Content/>
      </div>
    </AppContainer>
  )
}

export default App
