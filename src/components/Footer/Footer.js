import gh_icon from '../../images/GH-icon.png';

function Footer() {
	return (
		<div className='footer'>
			<a className='footer__author' href='https://github.com/Beorge-web' title='Author'>
				<img className='footer__icon' src={gh_icon} alt='github' />
				<p className='footer__text'>Beorge-web</p>
			</a>
			<div className='footer__api'>
				<p className='footer__text'> Powered by</p>
				<a href='https://www.weatherapi.com/' title='Free Weather API'>
					<img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt='Weather data by WeatherAPI.com' border='0' />
				</a>
			</div>
		</div>
	);
}
export default Footer;
