import { format, parseISO, addHours } from 'date-fns';
import { ptBR } from 'date-fns/locale';

function convertSecondInMinute(seg: number) {
  return seg / 60;
}

function convertMinuteInSecond(min: number) {
  return min * 60;
}

function convertISOToDate(date: string) {
  const dateParsed = parseISO(date);

  const formattedDate = format(
    addHours(dateParsed, 3),
    "EEEEEE',' dd 'de' MMM 'de' yyyy 'às' HH:mm'h'",
    { locale: ptBR }
  );

  return formattedDate;
}

export { convertSecondInMinute, convertMinuteInSecond, convertISOToDate };
