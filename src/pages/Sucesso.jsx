import { Link } from 'react-router-dom'
import './Sucesso.css'
import { Header } from './Components/Header';

function Sucesso() {
  return (
    <>
      <Header />

      <main className="sucesso">
        <div className="coracoes-flutuantes" aria-hidden="true">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className="coracao" style={{ '--i': i }}>
              💗
            </span>
          ))}
        </div>

        <section>

        </section>
      </main>
    </>
  )
}

export default Sucesso
