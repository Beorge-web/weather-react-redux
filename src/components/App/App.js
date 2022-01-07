import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';

import { useDispatch } from 'react-redux';
import { weatherLoad } from '../../redux/actions';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(weatherLoad());
	}, []);

	useEffect(() => {
		document.title = 'Погода';
	});
	return (
		<div className='root'>
			<Header />
			<Main />
		</div>
	);
}

export default App;
