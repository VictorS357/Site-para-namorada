import { Routes, Route } from 'react-router-dom'
import Pedido from './pages/Pedido.jsx'
import Sucesso from './pages/Sucesso.jsx'
import ProximaEtapa from './pages/ProximaEtapa.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Pedido />} />
      <Route path="/sim" element={<Sucesso />} />
      <Route path="/proxima-etapa" element={<ProximaEtapa />} />
    </Routes>
  )
}

export default App
