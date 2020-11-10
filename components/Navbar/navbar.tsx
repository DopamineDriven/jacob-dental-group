import { FC, Fragment } from 'react';
import Link from 'next/link';
import css from './navbar.module.css';
import CompanyLogo from '@components/Logo';
import { Media } from '@lib/window-width';

interface NavRef {
	href: string;
	label: string;
}

const links: NavRef[] = [
	{
		href: '/',
		label: 'Home'
	},
	{
		href: '/about',
		label: 'About'
	},
	{
		href: '/services',
		label: 'Services'
	},
	{
		href: '/contact',
		label: 'Contact'
	}
];
interface NavbarProps {
	className?: string;
}

interface NavBarFC extends FC<NavbarProps> {}

const Navbar: NavBarFC = ({ className }) => {
	const classNameParent = className;
	const navList = links.map(link => (
		<Fragment key={link.label}>
			<li key={link.href} className='inline-block mx-4'>
				<Link href={link.href} as={`${link.href}`} passHref key={link.label}>
					<a
						className={css.link}
						key={'/' + link.href}
						aria-label={`link to ${link.label}`}
					>
						{link.label}
					</a>
				</Link>
			</li>
		</Fragment>
	));

	// const LogoXL = (
	// 	<Media greaterThanOrEqual='lg'>
	// 		<CompanyLogo
	// 			width='5.75vw'
	// 			height='5.75vw'
	// 			classNameCircle={css.logoStroke}
	// 			classNamePath={css.logoPath}
	// 		/>
	// 	</Media>
	// );

	const LogoDesktop = (
		<Media greaterThanOrEqual='md'>
			<CompanyLogo
				width='6.25vw'
				height='6.25vw'
				classNameCircle={css.logoStroke}
				classNamePath={css.logoPath}
			/>
		</Media>
	);

	const LogoMobile = (
		<Media lessThan='md'>
			<CompanyLogo
				width='8.75vw'
				height='8.75vw'
				classNameCircle={css.logoStroke}
				classNamePath={css.logoPath}
			/>
		</Media>
	);

	return (
		<Fragment>
			<div
				className={
					classNameParent + ' bg-blue-800 transform -translate-y-5 select-none'
				}
			>
				<div className={css.divChild}>
					<div className={css.divGrandChild}>
						<Link href='/'>
							<a className={css.logo} aria-label='logo link to home'>
								{LogoDesktop}
								{LogoMobile}
							</a>
						</Link>
						<nav className='space-x-4 mx-3 block'>
							<ul className={css.ul}>{navList}</ul>
						</nav>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Navbar;
