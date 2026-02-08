import About from "./components/about"
import Footer from "./components/footer"
import Hero from "./components/hero"
import FinalVerdict from "./components/lastsection"
import ScIssue from "./components/school"

function App() {
  return (
  <main className="text-white font-mons">
    <Hero />
    <About />
    <ScIssue />
    <FinalVerdict />
  </main>

  )
}

export default App
