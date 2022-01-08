function MainCard({ name, number, text, icon }) {
	return (
		<div className='main__card'>
			<div className='main__card-title'>{name}</div>
			<div className='main__card-info'>{number + ' ' + text}</div>

			{icon === '' ? '' : <img className='main__card-img' src={icon} alt={`Иконка ${name}`} />}
		</div>
	);
}
export default MainCard;
