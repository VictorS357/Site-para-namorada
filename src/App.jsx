import { Routes, Route } from 'react-router-dom'
import Pedido from './pages/Pedido.jsx'
import Sucesso from './pages/Sucesso.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Pedido />} />
      <Route path="/sim" element={<Sucesso />} />
    </Routes>
  )
}

export default App
