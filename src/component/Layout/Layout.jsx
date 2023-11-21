import * as React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaGithubAlt, FaHome } from 'react-icons/fa';
import { GiBookshelf, GiDiamondTrophy } from 'react-icons/gi';
import styles from './Layout.module.css';

const links = [
	{
		to: '/',
		icon: FaHome,
		label: 'Home',
	},
	{
		to: '/search',
		icon: GiBookshelf,
		label: 'Library',
	},
	{
		to: '/popular',
		icon: GiDiamondTrophy,
		label: 'Popular',
	},
	{
		to: '/profile',
		icon: FaGithubAlt,
		label: 'Profile',
	},
];

const Layout = () => {
	return (
		<main>
			<header>
				<NavLink to='/'>
					<span>BookLover's Corner</span>
				</NavLink>
			</header>
			<Outlet />
			<footer>
				<div className={styles.footer}>
					{links.map(({ to, icon: Icon, label }, index) => (
						<NavLink
							to={to}
							key={index}
							className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>
							<Icon />
							<span>{label}</span>
						</NavLink>
					))}
				</div>
			</footer>
		</main>
	);
};

export default Layout;
