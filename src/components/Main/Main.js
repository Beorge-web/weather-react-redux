import { useSelector } from 'react-redux';
import MainCard from '../MainCard/MainCard';
import DayCard from '../WeatherToday/DayCard';
import cloudIcon from '../../images/cloud-icon.svg';
import humIcon from '../../images/hum-icon.svg';
import precipIcon from '../../images/precip-icon.svg';
import tempIcon from '../../images/temp-icon.svg';
import windIcon from '../../images/wind-icon.svg';
import visionIcon from '../../images/vision-icon.svg';

function Main() {
	const weather = useSelector((state) => {
		const { weatherReducer } = state;
		return weatherReducer.data;
	});
	const forecast = useSelector((state) => {
		const { weatherReducer } = state;
		return weatherReducer.forecast;
	});
	return (
		<div className='main'>
			<div className='main__info'>
				<div className='main__info-column'>
					<div className='main__info-title'></div>
					<div className='main__cards'>
						<MainCard name='Ветер' number={weather.wind} text='км/ч' add={weather.wind_dir} icon={windIcon} />
						<MainCard name='Давление' number={Math.round(weather.pressure)} text='мм. рт. ст.' add='' icon={tempIcon} />
						<MainCard name='Влажность' number={weather.humidity} text='%' add='' icon={humIcon} />
						<MainCard name='Облачность' number={weather.cloud} text='%' add='' icon={cloudIcon} />
						<MainCard name='Осадки' number={weather.precip} text='мм' add='' icon={precipIcon} />
						<MainCard name='Видимость' number={weather.vis_km} text='км' add='' icon={visionIcon} />
					</div>
					<div className='main__week'>
						<h4 className='main__week-title'>Прогноз</h4>
						<div className='main__day-cards'>
							{!!forecast
								? forecast
										.slice(0)
										.map((day) => (
											<DayCard key={day.id} day={day.day} img={day.img} temp={day.temp} precip={day.rain > day.snow ? day.rain : day.snow} />
										))
								: null}
						</div>
					</div>
				</div>
				<div className='main__info-column'>
					<h4 className='main__place'>
						{weather.place},
						<br /> {weather.country}
					</h4>
					<h3 className='main__today'>Сейчас</h3>
					{/* <p className='main__date'>{weather.time}</p> */}
					<p className='main__condition'>{!!weather.condition ? weather.condition.text : null}</p>
					<div className='main__degrees'>
						<img className='main__degrees-image' src={!!weather.condition ? `https:${weather.condition.icon}` : null} alt='' />
						<p className='main__degrees-number'>{weather.temp}</p>
						<br />
					</div>
					<div className='main__cards main__cards_today '>
						{!!forecast ? <MainCard name='Восход солнца' number={forecast[0].sunrise} text='' add='' icon='' /> : null}

						{!!forecast ? <MainCard name='Закат солнца' number={forecast[0].sunset} text='' add='' icon='' /> : null}
						<MainCard name='Ощущается как' number={Math.round(weather.feelslike)} text='с°' add={``} icon='' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;
