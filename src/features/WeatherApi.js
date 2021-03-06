class Api {
	constructor(config) {
		this._url = config.url;
		this._headers = config.headers;
		this._key = config.key;
	}
	getCityWeather(place) {
		return fetch(this._url + 'key=' + this._key + '&q=' + place + '&lang=ru&days=3', {
			method: 'GET',
			headers: this._headers,
		}).then((res) => this._getResponseData(res));
	}
	getInitialWeather() {
		return fetch(this._url + 'key=' + this._key + '&q=auto:ip&lang=ru&days=3', {
			method: 'GET',
			headers: this._headers,
		})
			.then((res) => this._getResponseData(res))
			.catch((err) => {
				console.log(err);
			});
	}
	_getResponseData(res) {
		if (!res.ok) {
			return Promise.reject(`Ошибка: ${res.status}`);
		}
		return res.json();
	}
}

const apiData = {
	url: 'https://api.weatherapi.com/v1/forecast.json?',
	headers: {
		'Content-Type': 'application/json',
	},
	key: '6a85a45dac8c4e64962192056220401',
};
const api = new Api(apiData);
export { api };
