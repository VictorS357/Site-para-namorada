import { Link } from 'react-router-dom';
import { Header } from './Components/Header';
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

        <section className="tempo">
          <div className="cronometro-container">
            <h2 className="titulo">
              
            </h2>
            <div className="cronometro">

            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Sucesso
