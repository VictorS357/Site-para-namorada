import { Link } from 'react-router-dom'
import './Sucesso.css'

function Sucesso() {
  return (
    <>
    <header>
        <div className="h1-container">
          <h1>
            EU TE AMO MAIS QUE TUDO MEU AMOR
          </h1>
        </div>

        <div className="musica">
          <iframe
            data-testid="embed-iframe"
            title="Player do Spotify"
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3XrchC3CeuoPAprx9fqNKI?utm_source=generator&si=23e20edbff934823"
            width="100%"
            height="100"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </header>

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
