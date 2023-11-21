import * as React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './MonthlyPopular.module.css';

const mocked = [
	{
		book_id: '58283080',
		position: '1',
		name: 'Hook, Line, and Sinker (Bellinger Sisters, #2)',
		cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1627068858i/58283080.jpg',
		rating: 4.12,
		url: 'https://www.goodreads.com/book/show/58283080-hook-line-and-sinker',
	},
	{
		book_id: '58438583',
		position: '2',
		name: 'One Italian Summer',
		cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1626799802i/58438583.jpg',
		rating: 3.73,
		url: 'https://www.goodreads.com/book/show/58438583-one-italian-summer',
	},
	{
		book_id: '58371432',
		position: '3',
		name: 'The Book of Cold Cases',
		cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1624553583i/58371432.jpg',
		rating: 3.91,
		url: 'https://www.goodreads.com/book/show/58371432-the-book-of-cold-cases',
	},
	{
		book_id: '58064046',
		position: '4',
		name: 'Gallant',
		cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1635862579i/58064046.jpg',
		rating: 3.9,
		url: 'https://www.goodreads.com/book/show/58064046-gallant',
	},
	{
		book_id: '57815107',
		position: '5',
		name: 'The War of Two Queens (Blood and Ash, #4)',
		cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1635174962i/57815107.jpg',
		rating: 4.05,
		url: 'https://www.goodreads.com/book/show/57815107-the-war-of-two-queens',
	},
	{
		book_id: '57693416',
		position: '6',
		name: 'The Golden Couple',
		cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1633973719i/57693416.jpg',
		rating: 4.04,
		url: 'https://www.goodreads.com/book/show/57693416-the-golden-couple',
	},
	{
		book_id: '55004093',
		position: '7',
		name: 'The Cartographers',
		cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1634915484i/55004093.jpg',
		rating: 3.74,
		url: 'https://www.goodreads.com/book/show/55004093-the-cartographers',
	},
	{
		book_id: '58490567',
		position: '8',
		name: 'The Diamond Eye',
		cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1641777418i/58490567.jpg',
		rating: 4.35,
		url: 'https://www.goodreads.com/book/show/58490567-the-diamond-eye',
	},
	{
		book_id: '57693427',
		position: '9',
		name: 'The Night Shift',
		cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1639384101i/57693427.jpg',
		rating: 4.03,
		url: 'https://www.goodreads.com/book/show/57693427-the-night-shift',
	},
	{
		book_id: '57007401',
		position: '10',
		name: 'Dating Dr. Dil (If Shakespeare was an Auntie #1)',
		cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1642405300i/57007401.jpg',
		rating: 3.82,
		url: 'https://www.goodreads.com/book/show/57007401-dating-dr-dil',
	},
	{
		book_id: '58265135',
		position: '11',
		name: 'The Unsinkable Greta James',
		cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1627483702i/58265135.jpg',
		rating: 3.97,
		url: 'https://www.goodreads.com/book/show/58265135-the-unsinkable-greta-james',
	},
	{
		book_id: '58536005',
		position: '12',
		name: 'The Club',
		cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1644230879i/58536005.jpg',
		rating: 3.44,
		url: 'https://www.goodreads.com/book/show/58536005-the-club',
	},
	{
		book_id: '56978089',
		position: '13',
		name: 'A Magic Steeped in Poison (The Book of Tea, #1)',
		cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1620317227i/56978089.jpg',
		rating: 3.99,
		url: 'https://www.goodreads.com/book/show/56978089-a-magic-steeped-in-poison',
	},
	{
		book_id: '58505877',
		position: '14',
		name: 'Run Rose Run',
		cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1628699768i/58505877.jpg',
		rating: 4,
		url: 'https://www.goodreads.com/book/show/58505877-run-rose-run',
	},
	{
		book_id: '57899793',
		position: '15',
		name: 'All My Rage',
		cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1629908086i/57899793.jpg',
		rating: 4.62,
		url: 'https://www.goodreads.com/book/show/57899793-all-my-rage',
	},
];

const MonthlyPopular = () => {
	const [books, setBooks] = React.useState(mocked);
	const [year, setYear] = React.useState(2021);
	const [month, setMonth] = React.useState(9);
	const [isLoading, setIsLoading] = React.useState(false);
	const [isLimited, setIsLimited] = React.useState(false);

	React.useEffect(() => {
		const fetchBooks = async () => {
			try {
				setIsLoading(true);
				const options = {
					url: `${process.env.REACT_APP_RAPIDAPI_URL}/month/${year}/${month}`,
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
	}, [year, month]);

	return (
		<div className={styles.main}>
			<div className='container'>
				<div className={styles.title}>
					<h2>15 Most Popular Books in a Month or an Year</h2>
					<p>
						Check out the most popular books of a month or an year, meticulously curated for you. Find your
						favorite read quickly with our intuitive search function.
					</p>
				</div>

				<div className={styles.filter}>
					<select value={month} onChange={(e) => setMonth(e.target.value)} className={styles.select}>
						{[
							{ value: 1, label: 'January' },
							{ value: 2, label: 'February' },
							{ value: 3, label: 'March' },
							{ value: 4, label: 'April' },
							{ value: 5, label: 'May' },
							{ value: 6, label: 'June' },
							{ value: 7, label: 'July' },
							{ value: 8, label: 'August' },
							{ value: 9, label: 'September' },
							{ value: 10, label: 'October' },
							{ value: 11, label: 'November' },
							{ value: 12, label: 'December' },
						].map((item, index) => (
							<option key={index} value={item.value}>
								{item.label}
							</option>
						))}
					</select>
					{[2019, 2020, 2021, 2022].map((item, index) => (
						<button
							key={index}
							className={item === year ? styles.active : styles.inactive}
							onClick={() => setYear(item)}>
							{item}
						</button>
					))}
				</div>

				{isLoading && <p className='error'>Loading...</p>}
				{isLimited && <p className='error'>API rate limit exceeded.</p>}

				{books?.length > 0 && (
					<div className={styles.books}>
						{books?.map((book, index) => (
							<Link to={`/book/${book.book_id}`} key={index} className={styles.book}>
								<div className={styles.cover}>
									<img src={book.cover} alt={book.name} />
									<span className={styles.rating}>{book.rating}</span>
								</div>
								<h3>{book.name}</h3>
								<p>Position {book.position}</p>
							</Link>
						))}
					</div>
				)}

				{!isLimited && !isLoading && books?.length === 0 && <p className='error'>No results found.</p>}
			</div>
		</div>
	);
};

export default MonthlyPopular;
