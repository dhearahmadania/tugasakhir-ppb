import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MostPopular.module.css';
import Button from '../../component/Button/Button';

const links = [
	{
		to: '/weekly',
		label: 'Weekly Popular Books by Genre',
		description:
			'Discover the best reads, thoughtfully chosen to enrich your reading experience. Explore the most popular books of a week, meticulously curated for you.',
	},
	{
		to: '/monthly',
		label: '15 Most Popular Books in a Month or an Year',
		description:
			'Check out the most popular books of a month or an year, meticulously curated for you. Find your favorite read quickly with our intuitive search function.',
	},
	{
		to: '/awarded',
		label: 'Awarded Books of a Year',
		description:
			'Explore the awarded books of a year, carefully selected to enhance your reading experience. Keep up with the latest trends in the book industry.',
	},
];

const MostPopular = () => {
	return (
		<div className={styles.main}>
			<div className={styles.overlay}></div>
			<div className={styles.background}></div>

			<div className='container'>
				<div className={styles.title}>
					<h2>Most Popular Books</h2>
					<p>
						Discover the best reads, thoughtfully chosen to enrich your reading experience, including the
						most popular books of a week, a month, or a year, and the awarded books of a year.
					</p>
				</div>

				<div className={styles.popular}>
					{links.map((link, index) => (
						<div key={index} className={styles.card}>
							<h2>{link.label}</h2>
							<p>{link.description}</p>
							<Link to={link.to}>
								<Button>Explore</Button>
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default MostPopular;
