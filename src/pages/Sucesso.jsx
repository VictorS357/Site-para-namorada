import { Link } from 'react-router-dom';
import { Header } from './Components/Header';
import { Amando } from './Components/Amando';
import { Cronometro } from './Components/Cronometro';
import { Carrossel } from './Components/Carrossel';

import './Sucesso.css'
import { PrimeiroEncontro } from './Components/PrimeiroEncontro';
import { DiaEuTeAmo } from './Components/DiaEuTeAmo';
import { EuTeAmoDesde } from './Components/EuTeAmoDesde';
import { PrimeiroBeijo } from './Components/PrimeiroBeijo';



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

        <Carrossel />

        <Amando />

        <PrimeiroEncontro />

        <DiaEuTeAmo />

        <div className="timer-text">
          <h1 className="timer-title">Achou que eu ia esquecer dessas datas amor?</h1>
          <p>Inclusive, eu acho que a gente tinha que adicionar mais uma data pra nossa lista hein... *pica-pau com a mão na boca*</p>
        </div>

        <EuTeAmoDesde />

        <PrimeiroBeijo />
      </main>
    </>
  )
}

export default Sucesso
