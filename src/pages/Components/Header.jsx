import './Header.css';

export function Header() {
  return (
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
  );
}