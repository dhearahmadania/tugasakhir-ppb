import * as React from 'react';
import axios from 'axios';
import styles from './WeeklyPopular.module.css';
import { Link } from 'react-router-dom';

const mocked = [
	{
		book_id: 62080187,
		name: 'Never Lie',
		cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1661428846l/62080187._SY475_.jpg',
		url: 'https://www.goodreads.com/book/show/62080187-never-lie',
	},
	{
		book_id: 45299992,
		name: 'If You Tell: a True Story of Murder, Family Secrets, and the Unbreakable Bond of Sisterhood',
		cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1556171767l/45299992._SY475_.jpg',
		url: 'https://www.goodreads.com/book/show/45299992-if-you-tell',
	},
	{
		book_id: 57795665,
		name: 'The Locked Door',
		cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1618859577l/57795665._SY475_.jpg',
		url: 'https://www.goodreads.com/book/show/57795665-the-locked-door',
	},
	{
		book_id: 61313902,
		name: 'Five Survive',
		cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1664370443l/61313902._SY475_.jpg',
		url: 'https://www.goodreads.com/book/show/61313902-five-survive',
	},
	{
		book_id: 60177373,
		name: 'Fairy Tale',
		cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1647789287l/60177373.jpg',
		url: 'https://www.goodreads.com/book/show/60177373-fairy-tale',
	},
	{
		book_id: 58724923,
		name: 'Hidden Pictures',
		cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1635260162l/58724923.jpg',
		url: 'https://www.goodreads.com/book/show/58724923-hidden-pictures',
	},
	{
		book_id: 58909880,
		name: 'The House Across the Lake',
		cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1639618949l/58909880.jpg',
		url: 'https://www.goodreads.com/book/show/58909880-the-house-across-the-lake',
	},
	{
		book_id: 52476830,
		name: 'The Push',
		cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1609854219l/52476830._SY475_.jpg',
		url: 'https://www.goodreads.com/book/show/52476830-the-push',
	},
	{
		book_id: 59808050,
		name: 'Daisy Darker',
		cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1639604124l/59808050.jpg',
		url: 'https://www.goodreads.com/book/show/59808050-daisy-darker',
	},
	{
		book_id: 54197718,
		name: 'One By One',
		cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1592705582l/54197718._SY475_.jpg',
		url: 'https://www.goodreads.com/book/show/54197718-one-by-one',
	},
];

const genres = ['art', 'biography', 'business', 'comics', 'crime', 'fantasy', 'fiction', 'history', 'romance'];

const WeeklyPopular = () => {
	const [books, setBooks] = React.useState(mocked);
	const [selected, setSelected] = React.useState('art');
	const [isLoading, setIsLoading] = React.useState(false);
	const [isLimited, setIsLimited] = React.useState(false);

	React.useEffect(() => {
		const fetchBooks = async () => {
			try {
				setIsLoading(true);
				const options = {
					url: `${process.env.REACT_APP_RAPIDAPI_URL}/week/${selected}/10`,
					method: 'GET',
					headers: {
						'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
						'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST,
					},
				};
				const response = await axios.request(options);
				setBooks(response.data);
			} catch (error) {
				if (error.response.status === 429) setIsLimited(true);
				console.error(error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchBooks();
	}, [selected]);

	return (
		<div className={styles.main}>
			<div className='container'>
				<div className={styles.title}>
					<h2>Weekly Popular Books by Genre</h2>
					<p>
						Discover the best reads, thoughtfully chosen to enrich your reading experience. Explore the most
						popular books of a week, meticulously curated for you.
					</p>
				</div>

				<div className={styles.filter}>
					<select value={selected} onChange={(e) => setSelected(e.target.value)} className={styles.select}>
						{genres.map((genre, index) => (
							<option key={index} value={genre}>
								{genre.charAt(0).toUpperCase() + genre.slice(1)}
							</option>
						))}
					</select>
				</div>

				{isLoading && <p className='error'>Loading...</p>}
				{isLimited && <p className='error'>API rate limit exceeded.</p>}

				{books?.length > 0 && (
					<div className={styles.books}>
						{books?.map((book, index) => (
							<Link to={`/book/${book.book_id}`} key={index} className={styles.book}>
								<div className={styles.cover}>
									<img src={book.cover} alt={book.name} />
								</div>
								<h3>{book.name}</h3>
							</Link>
						))}
					</div>
				)}

				{!isLimited && !isLoading && books?.length === 0 && <p className='error'>No results found.</p>}
			</div>
		</div>
	);
};

export default WeeklyPopular;
