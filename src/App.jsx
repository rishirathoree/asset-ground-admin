import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Layout from './App/Layout'
import 'boxicons/css/boxicons.min.css'
function App() {
  
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Layout />
      </BrowserRouter> 
    </>
  )
}

export default App
