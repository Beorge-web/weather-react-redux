/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
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
			<Footer />
		</div>
	);
}

export default App;
