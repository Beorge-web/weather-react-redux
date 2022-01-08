import { api } from '../features/WeatherApi';
import { LOADER_DISPLAY_OFF, LOADER_DISPLAY_ON, WEATHER } from './types';
export function weatherLoad() {
	return (dispatch) => {
		dispatch(loaderOn());
		api
			.getInitialWeather()
			.then((res) => {
				dispatch({
					type: WEATHER,
					data: res,
				});
			})
			.then(() => {
				dispatch(loaderOff());
			});
	};
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
export function loaderOn() {
	return {
		type: LOADER_DISPLAY_ON,
	};
}

export function loaderOff() {
	return {
		type: LOADER_DISPLAY_OFF,
	};
}
