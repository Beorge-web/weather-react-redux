import { useSelector } from 'react-redux';
import MainCard from '../MainCard/MainCard';

function Main() {
	const weather = useSelector((state) => {
		const { weatherReducer } = state;
		return weatherReducer.data;
	});

	// { place, cloud, time, country, feelslike, gust, humidity, is_day, temp, wind, wind_dir, condition } = weather;

	return (
		<div className='main'>
			{/* <div className='main__title'>
				<h1 className='main__title-text'>Погода в Москве сейчас</h1>
			</div> */}
			<div className='main__info'>
				<div className='main__info-column'>
					<div className='main__info-title'></div>
					<div className='main__cards'>
						<MainCard name='Ветер' number={weather.wind} text='км/ч' add={weather.wind_dir} />
						<MainCard name='Температура' number={weather.temp} text='с°' add={`По ощущению ${weather.feelslike}`} />
						<MainCard name='Влажность' number={weather.humidity} text='%' add={''} />
						<MainCard name='Облачность' number={weather.cloud} text='%' add={''} precip />
						<MainCard name='Осадки' number={weather.precip} text='мм' add={''} />
						<MainCard name='Видимость' number={weather.vis_km} text='км' add={''} />
					</div>
				</div>
				<div className='main__info-column'>
					<h4 className='main__place'>
						{weather.place},
						<br /> {weather.country}
					</h4>
					<h3 className='main__today'>Сегодня</h3>
					<p className='main__date'>{weather.time}</p>
					<div className='main__degrees'>
						<img className='main__degrees-image' src={!!weather.condition ? `https:${weather.condition.icon}` : null} alt='' />
						<p className='main__degrees-number'>{weather.temp}</p>
					</div>
					<div className='main__week'>
						<h4 className='main__week-title'>Неделя</h4>
						<div className='main__week-cards'>
							<div className='main__week-card'>
								<div className='main__week-day'>Wed</div>
								<img src='https://cdn.weatherapi.com/weather/64x64/day/113.png' alt='Иконка погоды' />
								<div className='main__week-deg'>19°</div>
							</div>
							<div className='main__week-card'>
								<div className='main__week-day'>Wed</div>
								<img src='https://cdn.weatherapi.com/weather/64x64/day/113.png' alt='Иконка погоды' />
								<div className='main__week-deg'>19°</div>
							</div>
							<div className='main__week-card'>
								<div className='main__week-day'>Wed</div>
								<img src='https://cdn.weatherapi.com/weather/64x64/day/113.png' alt='Иконка погоды' />
								<div className='main__week-deg'>19°</div>
							</div>
							<div className='main__week-card'>
								<div className='main__week-day'>Wed</div>
								<img src='https://cdn.weatherapi.com/weather/64x64/day/113.png' alt='Иконка погоды' />
								<div className='main__week-deg'>19°</div>
							</div>
							<div className='main__week-card'>
								<div className='main__week-day'>Wed</div>
								<img src='https://cdn.weatherapi.com/weather/64x64/day/113.png' alt='Иконка погоды' />
								<div className='main__week-deg'>19°</div>
							</div>
							<div className='main__week-card'>
								<div className='main__week-day'>Wed</div>
								<img src='https://cdn.weatherapi.com/weather/64x64/day/113.png' alt='Иконка погоды' />
								<div className='main__week-deg'>19°</div>
							</div>
							<div className='main__week-card'>
								<div className='main__week-day'>Wed</div>
								<img src='https://cdn.weatherapi.com/weather/64x64/day/113.png' alt='Иконка погоды' />
								<div className='main__week-deg'>19°</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;
