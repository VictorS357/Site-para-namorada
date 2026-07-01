import foto1 from '../../assets/primeiro-encontro1.jpeg';
import foto2 from '../../assets/primeiro-encontro2.jpeg';
import { CardExpansivel } from './CardExpansivel';
import './PrimeiroEncontro.css';

export function PrimeiroEncontro() {
  return (
    <CardExpansivel titulo="Nosso primeiro encontro">
      <div className="galeria">
        <img className="foto" src={foto1} alt="Nosso primeiro encontro" />
        <img className="foto" src={foto2} alt="Nosso primeiro encontro" />
      </div>
      <p className="texto">Nossa amor, parando pra pensar agora, se eu voltasse no tempo exatamente para esse dia, nunca na vida que eu iria imaginar que viveríamos tudo isso que vivemos até agora. Na época eu tinha muitas perguntas e preocupações... "e se não der certo?", "e se ela não gostar de mim?", "será que eu posso ser eu mesmo e expressar td o que eu sinto?". E mal sabia eu que desde então, eu me apaixonaria cada vez mais por ti, a cada dia que passa. E lógico que eu sonhava muito com o dia do pedido de namoro, o dia em que eu finalmente poderia te chamar de <span>minha namorada</span>. Hoje eu posso olhar pra trás e dizer que eu viveria tudo novamente, exatamente da forma que tudo aconteceu. </p>
    </CardExpansivel>
  );
}