
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import  Home  from './pages/Home/Home'
import Footer from './components/Footer'

function App() {
  

  return (
    <Router>
      <div className="App">
       <Header/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            {/* <Route path="/about" element={<div>About Page</div>} />
            <Route path="/contact" element={<div>Contact Page</div>} />
            <Route path="/login" element={<div>Login Page</div>} /> */}
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
   
  )
}

export default App
