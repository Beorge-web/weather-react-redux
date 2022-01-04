import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

function App() {
	const date = format(new Date('2022-01-05'), 'EEEE', {locale: ru});
	console.log(date);
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
