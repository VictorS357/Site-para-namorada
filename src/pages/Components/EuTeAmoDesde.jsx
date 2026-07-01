import dayjs from 'dayjs';
import { Cronometro } from './Cronometro';
import './CartaoTempo.css';

const INICIO = dayjs('2026-06-14T00:00:00');

export function EuTeAmoDesde() {
  return (
    <section className="tempo">
      <div className="cronometro-container">
        <h2 className="titulo">A gente disse "eu te amo" há:</h2>
        <Cronometro inicio={INICIO} />
      </div>
    </section>
  );
}
