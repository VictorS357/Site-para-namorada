import { useEffect, useState } from 'react';
import './Carrossel.css';

const modulos = import.meta.glob('../../assets/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
});

const fotos = Object.keys(modulos)
  .sort()
  .map((caminho) => modulos[caminho]);

const INTERVALO = 4000;

export function Carrossel() {
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    if (fotos.length <= 1) return;
    const id = setInterval(() => {
      setIndice((atual) => (atual + 1) % fotos.length);
    }, INTERVALO);
    return () => clearInterval(id);
  }, []);

  if (fotos.length === 0) return null;

  return (
    <div className="carrossel">
      <div className="carrossel-janela">
        <div
          className="carrossel-trilho"
          style={{ transform: `translateX(-${indice * 100}%)` }}
        >
          {fotos.map((foto, i) => (
            <img key={i} className="carrossel-foto" src={foto} alt={`Nós dois ${i + 1}`} />
          ))}
        </div>
      </div>

      {fotos.length > 1 && (
        <div className="carrossel-pontos">
          {fotos.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`ponto${i === indice ? ' ativo' : ''}`}
              aria-label={`Ir para foto ${i + 1}`}
              onClick={() => setIndice(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
