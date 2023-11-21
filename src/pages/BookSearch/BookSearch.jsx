import * as React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './BookSearch.module.css';

const mocked = [
	{
		book_id: 138398,
		name: 'The Walking Dead, Vol. 1: Days Gone Bye',
		cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1389233242i/138398._SY75_.jpg',
		url: 'https://www.goodreads.com/book/show/138398.The_Walking_Dead_Vol_1?from_search=true&from_srp=true&qid=nK9YZcAHq9&rank=1',
		authors: [
			'Robert Kirkman',
			'Tony Moore',
			'Andreas Mergenthaler',
			'Frank Darabont',
			'Charles Adlard',
			'Sina Grace',
			'Hardy Hellstern',
			'Charlie Adlard',
			'Rus Wooton',
			'Rus Wooton',
			'Stefano Gaudiano',
			'Cliff Rathburn',
			'Marc-Oliver Frisch',
			'Dave    Stewart',
			'Michael Schuster',
			'Frank Neubauer',
		],
		rating: 4.27,
		created_editions: 48,
		year: 2004,
	},
	{
		book_id: 6465707,
		name: 'The Walking Dead Compendium One',
		cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1449865699i/6465707._SY75_.jpg',
		url: 'https://www.goodreads.com/book/show/6465707-the-walking-dead-compendium-one?from_search=true&from_srp=true&qid=nK9YZcAHq9&rank=2',
		authors: ['Robert Kirkman'],
		rating: 4.44,
		created_editions: 13,
		year: 2009,
	},
	{
		book_id: 30071,
		name: 'The Walking Dead, Book One',
		cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1464733555i/30071._SY75_.jpg',
		url: 'https://www.goodreads.com/book/show/30071.The_Walking_Dead_Book_One?from_search=true&from_srp=true&qid=nK9YZcAHq9&rank=3',
		authors: ['Robert Kirkman', 'Tony Moore', 'Charlie Adlard'],
		rating: 4.35,
		created_editions: 14,
		year: 2004,
	},
	{
		book_id: 30071,
		name: 'The Walking Dead, Book One',
		cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1464733555i/30071._SY75_.jpg',
		url: 'https://www.goodreads.com/book/show/30071.The_Walking_Dead_Book_One?from_search=true&from_srp=true&qid=nK9YZcAHq9&rank=3',
		authors: ['Robert Kirkman', 'Tony Moore', 'Charlie Adlard'],
		rating: 4.35,
		created_editions: 14,
		year: 2004,
	},
	{
		book_id: 30071,
		name: 'The Walking Dead, Book One',
		cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1464733555i/30071._SY75_.jpg',
		url: 'https://www.goodreads.com/book/show/30071.The_Walking_Dead_Book_One?from_search=true&from_srp=true&qid=nK9YZcAHq9&rank=3',
		authors: ['Robert Kirkman', 'Tony Moore', 'Charlie Adlard'],
		rating: 4.35,
		created_editions: 14,
		year: 2004,
	},
	{
		book_id: 30071,
		name: 'The Walking Dead, Book One',
		cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1464733555i/30071._SY75_.jpg',
		url: 'https://www.goodreads.com/book/show/30071.The_Walking_Dead_Book_One?from_search=true&from_srp=true&qid=nK9YZcAHq9&rank=3',
		authors: ['Robert Kirkman', 'Tony Moore', 'Charlie Adlard'],
		rating: 4.35,
		created_editions: 14,
		year: 2004,
	},
	{
		book_id: 30071,
		name: 'The Walking Dead, Book One',
		cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1464733555i/30071._SY75_.jpg',
		url: 'https://www.goodreads.com/book/show/30071.The_Walking_Dead_Book_One?from_search=true&from_srp=true&qid=nK9YZcAHq9&rank=3',
		authors: ['Robert Kirkman', 'Tony Moore', 'Charlie Adlard'],
		rating: 4.35,
		created_editions: 14,
		year: 2004,
	},
	{
		book_id: 30071,
		name: 'The Walking Dead, Book One',
		cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1464733555i/30071._SY75_.jpg',
		url: 'https://www.goodreads.com/book/show/30071.The_Walking_Dead_Book_One?from_search=true&from_srp=true&qid=nK9YZcAHq9&rank=3',
		authors: ['Robert Kirkman', 'Tony Moore', 'Charlie Adlard'],
		rating: 4.35,
		created_editions: 14,
		year: 2004,
	},
	{
		book_id: 30071,
		name: 'The Walking Dead, Book One',
		cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1464733555i/30071._SY75_.jpg',
		url: 'https://www.goodreads.com/book/show/30071.The_Walking_Dead_Book_One?from_search=true&from_srp=true&qid=nK9YZcAHq9&rank=3',
		authors: ['Robert Kirkman', 'Tony Moore', 'Charlie Adlard'],
		rating: 4.35,
		created_editions: 14,
		year: 2004,
	},
];

const BookSearch = () => {
	const [books, setBooks] = React.useState(mocked);
	const [keyword, setKeyword] = React.useState('');
	const [isLoading, setIsLoading] = React.useState(false);
	const [isLimited, setIsLimited] = React.useState(false);

	const handleSearch = async (event) => {
		event.preventDefault();

		const fetchBooks = async () => {
			try {
				setIsLoading(true);
				setIsLimited(false);
				const options = {
					url: `${process.env.REACT_APP_RAPIDAPI_URL}/search/${keyword}`,
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
	};

	return (
		<div className={styles.main}>
			<div className='container'>
				<div className={styles.title}>
					<h2>Book Search</h2>
					<p>
						Effortlessly discover your desired books by searches, ensuring a personalized reading
						experience. Find your favorite read quickly with our intuitive search function.
					</p>
				</div>

				<form className={styles.search} onSubmit={handleSearch}>
					<input
						type='text'
						placeholder='Search for books...'
						value={keyword}
						onChange={(e) => setKeyword(e.target.value)}
					/>
					<button type='submit'>Search</button>
				</form>

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
								<p>Relased in {book.year}</p>
							</Link>
						))}
					</div>
				)}

				{!isLimited && !isLoading && books?.length === 0 && <p className='error'>No results found.</p>}
			</div>
		</div>
	);
};

export default BookSearch;
