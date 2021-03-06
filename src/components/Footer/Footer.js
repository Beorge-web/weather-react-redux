import gh_icon from '../../images/GH-icon.png';

function Footer() {
	return (
		<div className='footer'>
			<a target='_blank' rel='noreferrer' className='footer__author' href='https://github.com/Beorge-web' title='Author'>
				<img className='footer__icon' src={gh_icon} alt='github' />
				<p className='footer__text'>Beorge-web</p>
			</a>
			<a target='_blank' rel='noreferrer' href='https://www.weatherapi.com/' title='Free Weather API' className='footer__api'>
				<p className='footer__text'> Powered by</p>
				<div>
					<img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt='Weather data by WeatherAPI.com' border='0' />
				</div>
			</a>
		</div>
	);
}
export default Footer;
