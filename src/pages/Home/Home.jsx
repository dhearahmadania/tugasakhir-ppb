import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import Button from '../../component/Button/Button';

const Home = () => {
	return (
		<div className={styles.main}>
			<div className={styles.overlay}></div>
			<div className={styles.background}></div>
			<div className='container'>
				<div className={styles.title}>
					<h2>Hi, Lover's!</h2>
					<p>Welcome to our Corner, where stories come to life.</p>
				</div>

				<div className={styles.featured}>
					<div className={styles.card}>
						<h2>Finding Books</h2>
						<p>
							Effortlessly discover your desired books by searches, ensuring a personalized reading
							experience. Find your favorite read quickly with our intuitive search function.
						</p>
						<Link to='/search'>
							<Button>Search Books</Button>
						</Link>
					</div>

					<div className={styles.card}>
						<h2>Most Popular</h2>
						<p>
							Trending reads of the week, month, and year! Explore our Most Popular collection—a curated
							selection of books that have captured the imagination of readers.
						</p>
						<Link to='/popular'>
							<Button>Get Recommended</Button>
						</Link>
					</div>
				</div>

				<div className={styles.title}>
					<h2>Books are Windows to The World</h2>
					<p>Let's open that window together and explore the vast world of knowledge.</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
