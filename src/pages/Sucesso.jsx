import { Link } from 'react-router-dom';
import { Header } from './Components/Header';
import { Amando } from './Components/Amando';
import { Cronometro } from './Components/Cronometro';
import './Sucesso.css'



function Sucesso() {
  return (
    <>
      <main className="sucesso">
        <Header />

        <div className="coracoes-flutuantes" aria-hidden="true">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className="coracao" style={{ '--i': i }}>
              💗
            </span>
          ))}
        </div>

        <Amando />
      </main>
    </>
  )
}

export default Sucesso
