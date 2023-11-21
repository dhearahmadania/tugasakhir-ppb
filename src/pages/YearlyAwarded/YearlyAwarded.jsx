import * as React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './YearlyAwarded.module.css';

const mocked = [
	{
		book_id: 56597885,
		name: 'Beautiful World, Where Are You',
		winning_category: 'Fiction',
		cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1618329605l/56597885.jpg',
		url: 'https://www.goodreads.com/choiceawards/best-fiction-books-2021',
	},
	{
		book_id: 58744977,
		name: 'The Last Thing He Told Me',
		winning_category: 'Mystery & Thriller',
		cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1628623381l/58744977._SY475_.jpg',
		url: 'https://www.goodreads.com/choiceawards/best-mystery-thriller-books-2021',
	},
];

const YearlyAwarded = () => {
	const [books, setBooks] = React.useState(mocked);
	const [year, setYear] = React.useState(2021);
	const [isLoading, setIsLoading] = React.useState(false);
	const [isLimited, setIsLimited] = React.useState(false);

	React.useEffect(() => {
		const fetchBooks = async () => {
			try {
				setIsLoading(true);
				const options = {
					url: `${process.env.REACT_APP_RAPIDAPI_URL}/top/${year}`,
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
	}, [year]);

	return (
		<div className={styles.main}>
			<div className='container'>
				<div className={styles.title}>
					<h2>Awarded Books of a Year</h2>
					<p>
						Explore the awarded books of a year, carefully selected to enhance your reading experience. Keep
						up with the latest trends in the book industry.
					</p>
				</div>

				<div className={styles.filter}>
					<select value={year} onChange={(e) => setYear(e.target.value)} className={styles.select}>
						{[...Array(2023 - 2018)].map((_, index) => (
							<option key={index} value={2023 - index}>
								{2023 - index}
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
								<p>{book.winning_category}</p>
							</Link>
						))}
					</div>
				)}

				{!isLimited && !isLoading && books?.length === 0 && <p className='error'>No results found.</p>}
			</div>
		</div>
	);
};

export default YearlyAwarded;
