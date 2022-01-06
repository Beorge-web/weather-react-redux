function MainCard({ name, number, text, add }) {
	return (
		<div className='main__card'>
			<div className='main__card-title'>{name}</div>
			<div className='main__card-info'>{number + ' ' + text}</div>
			<div className='main__card-add'>{add}</div>
		</div>
	);
}
export default MainCard;
