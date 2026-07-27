import {Routes,Route,Navigate} from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'



function App() {
    return (
      // <Routes>
      //   <Route path="/" element={<Navigate to="/Navbar"/>}/>
      //   <Route path="/navbar" element={<Navbar/>}/>
      //   <Route path="/home" element={<Home/>}/>
      //   {/* <Route path="/signup" element={<Signup/>}/> */}
        
      // </Routes>

      <>
      <Navbar/>
      <Home/>
      </>
    )
}

export default App
