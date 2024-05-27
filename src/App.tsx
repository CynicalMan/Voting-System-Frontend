import Navbar from './components/navbar'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
    <div className='container'>    
    <div className='row '>
        <div className='col w-100'>
          <Navbar />
        </div>
      </div>
      <div className='row justify-content-center align-items-center'>
      <Outlet/>
      </div>
    </div>
    </>
  )
}

export default App
