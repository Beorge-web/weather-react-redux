import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';

function App() {
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
