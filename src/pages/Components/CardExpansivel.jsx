import { useLayoutEffect, useRef, useState } from 'react';
import './CardExpansivel.css';

export function CardExpansivel({ titulo, children, abertoInicial = false }) {
  const [aberto, setAberto] = useState(abertoInicial);
  const [altura, setAltura] = useState(0);
  const conteudoRef = useRef(null);

  useLayoutEffect(() => {
    if (aberto) {
      setAltura(conteudoRef.current.scrollHeight);
    }
  }, [aberto, children]);

  return (
    <div className={`card-expansivel${aberto ? ' aberto' : ''}`}>
      <button
        type="button"
        className="card-cabecalho"
        onClick={() => setAberto((valor) => !valor)}
        aria-expanded={aberto}
      >
        <h2 className="titulo">{titulo}</h2>
        <span className="seta" aria-hidden="true">
          ▾
        </span>
      </button>
      <div className="card-conteudo" style={{ height: aberto ? altura : 0 }}>
        <div className="card-conteudo-interno" ref={conteudoRef}>
          {children}
        </div>
      </div>
    </div>
  );
}
