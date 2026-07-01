import { Link } from 'react-router-dom'

function Sucesso() {
  return (
    <main className="sucesso">
      <div className="coracoes-flutuantes" aria-hidden="true">
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} className="coracao" style={{ '--i': i }}>
            💗
          </span>
        ))}
      </div>

      <section className="cartao">
        <h1>Ela disse sim! 🥰</h1>
        <p className="subtitulo">
          Agora somos oficialmente um casal. Te amo muito! ❤️
        </p>
        <Link to="/" className="btn-sim">
          Voltar
        </Link>
      </section>
    </main>
  )
}

export default Sucesso
