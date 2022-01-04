import header__logo from '../../images/app-logo-snow.svg';
function Header() {
	return (
		<div className='header'>
			<div className='header__logo'>
				<img className='header__logo-base' alt='Логотип' src={header__logo}></img>
				<h1 className='header__logo-name'>Погода</h1>
			</div>
			<nav className='header__menu'>
				<ul className='header__menu-items'>
					{/* <li className='header__menu-item'>Главная</li> */}
					<li className='header__menu-item'>Погода сегодня</li>
					<li className='header__menu-item'>Карта осадков</li>
				</ul>
				<form
					className='header__search-form'
					onSubmit={(e) => {
						e.preventDefault();
						console.log('submit');
					}}>
					<input className='header__input' type='text' placeholder='Город' />
					<button className='header__serach-button' type='submit'></button>
				</form>
			</nav>
		</div>
	);
}
export default Header;
