function Main() {
	return (
		<div className='main'>
			{/* <div className='main__title'>
				<h1 className='main__title-text'>Погода в Москве сейчас</h1>
			</div> */}
			<div className='main__info'>
				<div className='main__info-column'>
					<div className='main__info-title'></div>
					<div className='main__cards'>
						<div className='main__card'>
							<div className='main__card-title'>Ветер</div>
							<div className='main__card-info'>5.4 км/ч</div>
							<img src='' alt='' />
						</div>
						<div className='main__card'>
							<div className='main__card-title'>Температура</div>
							<div className='main__card-info'>-18с°</div>
						</div>
						<div className='main__card'>
							<div className='main__card-title'>Давление</div>
							<div className='main__card-info'>5.4 км/ч</div>
						</div>
						<div className='main__card'>
							<div className='main__card-title'>Облачность</div>
							<div className='main__card-info'>-18с`</div>
						</div>
						<div className='main__card'>
							<div className='main__card-title'>Влажность</div>
							<div className='main__card-info'>95%</div>
						</div>
						<div className='main__card'>
							<div className='main__card-title'>Облачность</div>
							<div className='main__card-info'>-18с`</div>
						</div>
					</div>
				</div>
				<div className='main__info-column'>
					<h4 className='main__place'>
						Moscow,
						<br /> Russia
					</h4>
					<h3 className='main__today'>Сегодня</h3>
					<p className='main__date'>2022-01-04 23:31</p>
					<div className='main__degrees'>
						<img className='main__degrees-image' src='https://cdn.weatherapi.com/weather/128x128/day/116.png' alt='' />
						<p className='main__degrees-number'>-10</p>
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
