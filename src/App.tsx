import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import Auth from './pages/Auth'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-transparent selection:bg-white/20 selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
