import { Cronometro } from "./Cronometro";
import './Amando.css';

export function Amando() {
  return (
    <section className="tempo">
      <div className="cronometro-container">
        <h2 className="titulo">Eu te amo há:</h2>
        <Cronometro />
        <p className="frase">A partir de agr vamos só aumentar esses anos aí kkkkkk</p>
      </div>
    </section>
  );
}