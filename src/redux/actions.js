import { api } from '../features/WeatherApi';
import { WEATHER } from './types';
export function weatherLoad() {
	return (dispatch) =>
		api.getInitialWeather().then((res) => {
			dispatch({
				type: WEATHER,
				data: res,
			});
		});
}

export function searchWeather(place) {
	return (dispatch) =>
		api.getCityWeather(place).then((res) => {
			dispatch({
				type: WEATHER,
				data: res,
			});
		});
}
