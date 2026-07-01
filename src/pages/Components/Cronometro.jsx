import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import './Cronometro.css';

const INICIO = dayjs('2026-04-30T15:00:00');

function calcularTempo(agora) {
  const anos = agora.diff(INICIO, 'year');
  const apósAnos = INICIO.add(anos, 'year');

  const meses = agora.diff(apósAnos, 'month');
  const apósMeses = apósAnos.add(meses, 'month');

  const dias = agora.diff(apósMeses, 'day');
  const apósDias = apósMeses.add(dias, 'day');

  const horas = agora.diff(apósDias, 'hour');
  const apósHoras = apósDias.add(horas, 'hour');

  const minutos = agora.diff(apósHoras, 'minute');
  const apósMinutos = apósHoras.add(minutos, 'minute');

  const segundos = agora.diff(apósMinutos, 'second');

  return { anos, meses, dias, horas, minutos, segundos };
}

export function Cronometro() {
  const [agora, setAgora] = useState(() => dayjs());

  useEffect(() => {
    const id = setInterval(() => setAgora(dayjs()), 1000);
    return () => clearInterval(id);
  }, []);

  const { anos, meses, dias, horas, minutos, segundos } = calcularTempo(agora);

  const unidades = [
    { valor: anos, rotulo: 'anos' },
    { valor: meses, rotulo: 'meses' },
    { valor: dias, rotulo: 'dias' },
    { valor: horas, rotulo: 'horas' },
    { valor: minutos, rotulo: 'min' },
    { valor: segundos, rotulo: 'seg' },
  ];

  return (
    <div className="cronometro">
      {unidades.map(({ valor, rotulo }) => (
        <div className="unidade" key={rotulo}>
          <span className="valor">{String(valor).padStart(2, '0')}</span>
          <span className="rotulo">{rotulo}</span>
        </div>
      ))}
    </div>
  );
}
