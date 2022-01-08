/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { weatherLoad } from '../../redux/actions';
import Spinner from '../Spinner.js/Spinner';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(weatherLoad());
	}, []);
	const isLoading = useSelector((state) => state.loaderReducer.loading);
	useEffect(() => {
		document.title = 'Погода';
	});
	return (
		<div className='root'>
			<Header />
			{isLoading ? <Spinner /> : <Main />}
			<Footer />
		</div>
	);
}

export default App;
