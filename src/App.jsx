import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import Header from "./Components/layout/Header"
import SidePannel from "./Components/layout/SidePannel"
import Products from "./Components/pages/Products"

function App() {
  return (
   <Router>
  <Header/>
  <SidePannel/>
    <Routes>
      <Route path="/" element={<Products/>}/>
    </Routes>
   </Router>
  )
}

export default App