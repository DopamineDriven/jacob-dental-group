import { FC } from 'react';
import svgAbstracted from '@_types/svg';

interface svgParameterized extends FC<svgAbstracted> {}

const NavbarLogo: svgParameterized = props => {
	const {
		width = '5vw',
		height = '5vw',
		strokeColor = ' white',
		strokeWidth = '2',
		classNameCircle = '',
		rotateCenter = 0,
		classNameSVG = '',
		fillColor1 = ' white',
		classNamePath = ''
	} = props;
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 65 65'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			transform={`rotate(${rotateCenter}, 65, 65)`}
			className={`${classNameSVG}`}
		>
			<circle
				cx='32.5'
				cy='32.5'
				r='31.5'
				stroke={strokeColor}
				strokeWidth={strokeWidth}
				className={classNameCircle}
			/>
			<path
				d='M10.588 36H12.496V31.692C12.496 31.344 12.46 29.964 12.46 29.964H12.484C12.484 29.964 12.784 31.26 12.88 31.572L14.104 36H15.856L17.092 31.56C17.188 31.248 17.488 29.964 17.488 29.964H17.512C17.512 29.964 17.476 31.332 17.476 31.68V36H19.42V27.42H16.54L15.484 31.176C15.34 31.716 15.004 33.132 15.004 33.132H14.98C14.98 33.132 14.644 31.716 14.488 31.176L13.444 27.42H10.588V36ZM23.1638 36.156C24.1718 36.156 24.9518 35.832 25.4318 35.304C25.8518 34.836 26.0438 34.212 26.0438 33.444V27.42H23.9198V33.396C23.9198 34.02 23.6558 34.404 23.0318 34.404C22.4438 34.404 22.0958 34.104 22.0958 33.372V32.664H20.1638V33.42C20.1638 35.052 21.1358 36.156 23.1638 36.156ZM26.7791 38.148C27.3431 38.112 27.8711 37.884 28.2431 37.488C28.6031 37.104 28.8071 36.6 28.8071 35.844V33.984H26.7551V36H27.7151C27.7151 36.684 27.3551 37.164 26.7791 37.32V38.148ZM33.7706 34.212V29.196H35.0426C36.3746 29.196 37.1306 30.204 37.1306 31.764C37.1306 33.336 36.4106 34.212 35.0186 34.212H33.7706ZM31.6466 36H35.1746C36.2546 36 37.1186 35.724 37.7906 35.22C38.7506 34.488 39.2786 33.276 39.2786 31.764C39.2786 29.136 37.6826 27.42 35.3066 27.42H31.6466V36ZM42.2315 34.212V29.196H43.5035C44.8355 29.196 45.5915 30.204 45.5915 31.764C45.5915 33.336 44.8715 34.212 43.4795 34.212H42.2315ZM40.1075 36H43.6355C44.7155 36 45.5795 35.724 46.2515 35.22C47.2115 34.488 47.7395 33.276 47.7395 31.764C47.7395 29.136 46.1435 27.42 43.7675 27.42H40.1075V36ZM51.9885 36.204C53.9685 36.204 55.5045 35.208 55.5045 33.408C55.5045 31.572 54.0645 31.08 52.4685 30.708C51.1845 30.42 50.5245 30.276 50.5245 29.676C50.5245 29.196 51.0165 28.872 51.7605 28.872C52.5525 28.872 53.0565 29.244 53.1405 29.904H55.2165C55.1325 28.104 53.6925 27.264 51.8325 27.264C49.9125 27.264 48.4245 28.068 48.4245 29.904C48.4245 31.704 49.9965 32.16 51.4845 32.508C52.6605 32.796 53.3565 32.94 53.3565 33.624C53.3565 34.272 52.6725 34.524 51.9765 34.524C50.9565 34.524 50.3925 34.164 50.2965 33.3H48.1605C48.2085 35.196 49.7085 36.204 51.9885 36.204Z'
				fill={fillColor1}
				className={classNamePath}
			/>
		</svg>
	);
};

export default NavbarLogo;
