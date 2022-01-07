import { format, parse } from 'date-fns';
import { ru } from 'date-fns/locale';
function DayCard({ day, img, temp, precip }) {
	let date = format(new Date(day), 'EEEEEE dd MMMM', { locale: ru });
	date = date.charAt(0).toUpperCase() + date.slice(1);
	return (
		<div className='main__day-card'>
			<div className='main__day-date'>{date.substring(0, 9)}</div>
			<img src={`https:${img}`} alt='Иконка погоды' />
			<div className='main__day-deg'>{Math.round(temp)}c°</div>
			<div className='main_precip'>Осадки {precip}%</div>
		</div>
	);
}
export default DayCard;
