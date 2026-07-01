import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Pedido.css'

const FRASES_NAO = [
  'Não',
  'Tem certeza?',
  'Pensa bem...',
  'Só mais uma vez, tem certeza?',
  'Vai perder essa chance?',
  'Última chance!',
  'Ok, mas era pra clicar no Sim...',
]

function Pedido() {
  const navigate = useNavigate()
  const [naoCliques, setNaoCliques] = useState(0)
  const [posicaoNao, setPosicaoNao] = useState(null)

  const fugir = () => {
    const x = Math.random() * 70 - 35
    const y = Math.random() * 60 - 30
    setPosicaoNao({ transform: `translate(${x}vw, ${y}vh)` })
    setNaoCliques((n) => Math.min(n + 1, FRASES_NAO.length - 1))
  }

  return (
    <main className="pedido">
      <div className="coracoes-flutuantes" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="coracao" style={{ '--i': i }}>
            💗
          </span>
        ))}
      </div>

      <section className="cartao">
        <h1>Amor, você tá pronta para um novo "nós"?</h1>
        <p className="subtitulo">A resposta certa é só uma... 😉</p>

        <div className="botoes">
          <button
            type="button"
            className="btn-sim"
            onClick={() => navigate('/sim')}
          >
            Sim! 💖
          </button>
          <button
            type="button"
            className="btn-nao"
            style={posicaoNao ?? undefined}
            onMouseEnter={fugir}
            onClick={fugir}
          >
            {FRASES_NAO[naoCliques]}
          </button>
        </div>
      </section>
    </main>
  )
}

export default Pedido
