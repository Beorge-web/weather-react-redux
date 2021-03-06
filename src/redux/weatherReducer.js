import { WEATHER } from './types';

const initialState = {
	data: {},
};
export const weatherReducer = (state = initialState, action) => {
	switch (action.type) {
		case WEATHER:
			const forecast = action.data.forecast.forecastday.map((d) => {
				return {
					day: d.date,
					img: d.day.condition.icon,
					temp: d.day.avgtemp_c,
					rain: d.day.daily_chance_of_rain,
					snow: d.day.daily_chance_of_snow,
					id: d.date_epoch,
					sunset: d.astro.sunset,
					sunrise: d.astro.sunrise,
					maxtemp: d.day.maxtemp_c,
					mintemp: d.day.mintemp_c,
				};
			});
			const newWeather = {
				place: action.data.location.name,
				time: action.data.location.localtime,
				country: action.data.location.country,
				region: action.data.location.region,
				cloud: action.data.current.cloud,
				condition: action.data.current.condition,
				feelslike: action.data.current.feelslike_c,
				gust: action.data.current.gust_kph,
				humidity: action.data.current.humidity,
				is_day: action.data.current.is_day,
				wind: action.data.current.wind_kph,
				wind_dir: action.data.current.wind_dir,
				temp: action.data.current.temp_c,
				precip: action.data.current.precip_mm,
				vis_km: action.data.current.vis_km,
				pressure: action.data.current.pressure_mb / (1 + 1/3),
			};
			return {
				...state,
				data: newWeather,
				forecast,
			};
		default:
			return state;
	}
};
