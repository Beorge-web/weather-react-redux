import { Rings } from 'react-loader-spinner';

function Spinner() {
	return (
		<div className='loader'>
			<Rings arialLabel='loading-indicator' height='80%' width='80%' radius={6} color='#333866' wrapperClass='loader__spinner' />
		</div>
	);
}
export default Spinner;
