import { Rings } from 'react-loader-spinner';

function Spinner() {
	return (
		<div className='loader'>
			<Rings arialLabel='loading-indicator' height='80%' width='80%' radius={6} color='#333866' />
		</div>
	);
}
export default Spinner;
