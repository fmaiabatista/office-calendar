import "./index.css"
import Home from "./Home"
import { Router, Routes, Route } from "solid-app-router"

const App = () => {
  return (
    <Router>
      <h1>App</h1>
      <Routes>
        <Route path="/" component={Home} />
      </Routes>
    </Router>
  )
}

export default App
