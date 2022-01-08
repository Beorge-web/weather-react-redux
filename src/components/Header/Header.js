import { useState } from 'react';
import { useDispatch } from 'react-redux';
import header__logo from '../../images/app-logo-snow.svg';
import { searchWeather } from '../../redux/actions';
function Header() {
	const dispatch = useDispatch();
	const [input, setInput] = useState('');
	return (
		<div className='header'>
			<div className='header__logo'>
				<img className='header__logo-base' alt='Логотип' src={header__logo}></img>
				<h1 className='header__logo-name'>Погода</h1>
			</div>
			<div className='header__menu'>
				<form
					title='Введите город для поиска'
					className='header__search-form'
					onSubmit={(e) => {
						e.preventDefault();
						dispatch(searchWeather(input));
						setInput('');
					}}>
					<input
						className='header__input'
						type='text'
						placeholder='Город'
						value={input}
						onChange={(e) => {
							setInput(e.target.value);
						}}
					/>
					<button className='header__serach-button' type='submit'></button>
				</form>
			</div>
		</div>
	);
}
export default Header;
