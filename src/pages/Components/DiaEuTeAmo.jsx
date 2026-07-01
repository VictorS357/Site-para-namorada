import foto1 from '../../assets/eu-te-amo1.jpeg';
import foto2 from '../../assets/eu-te-amo2.jpeg';
import foto3 from '../../assets/eu-te-amo3.jpeg';
import { CardExpansivel } from './CardExpansivel';

export function DiaEuTeAmo() {
  return (
    <CardExpansivel titulo="O dia do eu te amo">
      <div className="galeria">
        <img className="foto" src={foto1} alt="O dia do eu te amo" />
        <img className="foto" src={foto2} alt="O dia do eu te amo" />
        <img className="foto" src={foto3} alt="O dia do eu te amo" />
      </div>
      <p className="texto">O mais engraçado de tudo sobre esse dia é que eu já pensava em te dizer que te amava há muito tempo. Mas eu só consigo me lembrar do que eu senti naquela hora amor, parecia que o tempo tinha parado. Eu te olhando completamente apaixonado e a mulher da minha vida simplesmente fala que me ama KAKAKAKAKAK. Nesse dia eu me senti igual uma criancinha ganhando um presente que queria muito, a diferença, é que nesse dia eu ganhei o mundo todo, até porque, nunca vou me cansar de falar que o mini Victor, desde pequeno, sonhava contigo, mesmo sem eu saber que seria você! Desde então, eu nunca vou me cansar de te dizer o quanto eu te amo. Minha gatinha, eu sempre vou te amar mais que ontem e menos que amanhã.</p>
    </CardExpansivel>
  );
}
