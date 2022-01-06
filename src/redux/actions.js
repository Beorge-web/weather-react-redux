import { api } from '../features/WeatherApi';
import { WEATHER_INITIAL } from './types';
export function weatherLoad() {
	return (dispatch) =>
		api.getInitialWeather().then((res) => {
			dispatch({
				type: WEATHER_INITIAL,
				data: res,
			});
		});
}
