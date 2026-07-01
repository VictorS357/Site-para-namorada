import dayjs from 'dayjs';
import { Cronometro } from './Cronometro';
import './CartaoTempo.css';

const INICIO = dayjs('2026-05-05T00:00:00');

export function PrimeiroBeijo() {
  return (
    <section className="tempo">
      <div className="cronometro-container">
        <h2 className="titulo">Nosso primeiro beijo foi há:</h2>
        <Cronometro inicio={INICIO} />
      </div>
    </section>
  );
}
