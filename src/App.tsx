import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'

function App() {
  return (
    <div className="min-h-screen bg-transparent selection:bg-white/20 selection:text-white">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App
