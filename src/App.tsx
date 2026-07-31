import Header from "./components/layout/Header/Header"
import Footer from "./components/layout/Footer/Footer"
import HomePage from "./pages/Home/HomePage"

function App() {
  return (
    <main style={{ minHeight: '100vh', width: '100%' }}>
      <Header />
      <HomePage />
      <Footer />
    </main>
  )
}

export default App
