import './ProximaEtapa.css'

function ProximaEtapa() {
  return (
    <main className="proxima-etapa">
      <div className="coracoes-flutuantes" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="coracao" style={{ '--i': i }}>
            💗
          </span>
        ))}
      </div>

      <section className="cartao">
        <h1>
          Agora siga seu futuro namorado (quem sabe nem tão futuro assim, se
          é q tu me entende rsrs), pois ele é foda e sabe o que fazer
        </h1>
      </section>
    </main>
  )
}

export default ProximaEtapa
