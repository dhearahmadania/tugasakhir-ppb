import * as React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styles from './BookDetail.module.css';

const mocked = {
	book_id: 56597885,
	name: 'Beautiful World, Where Are You',
	cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1618329605l/56597885.jpg',
	url: 'https://www.goodreads.com/book/show/56597885',
	authors: ['Sally Rooney'],
	rating: 3,
	pages: 356,
	published_date: 'September 7th 2021',
	synopsis:
		'Beautiful World, Where Are You is a new novel by Sally Rooney, the bestselling author of Normal People and Conversations with Friends.Alice, a novelist, meets Felix, who works in a warehouse, and asks him if he’d like to travel to Rome with her. In Dublin, her best friend, Eileen, is getting over a break-up and slips back into flirting with Simon, a man she has known sinceBeautiful World, Where Are You is a new novel by Sally Rooney, the bestselling author of Normal People and Conversations with Friends.Alice, a novelist, meets Felix, who works in a warehouse, and asks him if he’d like to travel to Rome with her. In Dublin, her best friend, Eileen, is getting over a break-up and slips back into flirting with Simon, a man she has known since childhood. Alice, Felix, Eileen, and Simon are still young—but life is catching up with them. They desire each other, they delude each other, they get together, they break apart. They have sex, they worry about sex, they worry about their friendships and the world they live in. Are they standing in the last lighted room before the darkness, bearing witness to something? Will they find a way to believe in a beautiful world?',
};

const Detail = () => {
	const { id } = useParams();
	const [book, setBook] = React.useState(mocked);
	const [isLoading, setIsLoading] = React.useState(false);
	const [isLimited, setIsLimited] = React.useState(false);

	React.useEffect(() => {
		const fetchBook = async () => {
			try {
				setIsLoading(true);
				setIsLimited(false);
				const options = {
					url: `${process.env.REACT_APP_RAPIDAPI_URL}/book/${id}`,
					method: 'GET',
					headers: {
						'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
						'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST,
					},
				};
				const response = await axios.request(options);
				setBook(response.data);
			} catch (error) {
				if (error.response.status === 429) setIsLimited(true);
				console.error(error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchBook();
	}, [id]);

	return (
		<div className={styles.main}>
			<div className='container'>
				{isLoading && <p className='error'>Loading...</p>}
				{isLimited && <p className='error'>API rate limit exceeded.</p>}

				{book && (
					<div className={styles.book}>
						<div className={styles.cover}>
							<img src={book?.cover} alt={book?.name} />
						</div>
						<div className={styles.info}>
							<div className={styles.detail}>
								<p className={styles.rating}>Rating {book?.rating}</p>
								<p className={styles.pages}>{book?.pages} Pages</p>
							</div>
							<h1>{book?.name}</h1>
							<p className={styles.author}>By {book?.authors[0]}</p>
							<p className={styles.date}>{book?.published_date}</p>
							<p className={styles.synopsis}>{book?.synopsis}</p>
						</div>
					</div>
				)}

				{!isLimited && !isLoading && !book && <p className='error'>No results found.</p>}
			</div>
		</div>
	);
};

export default Detail;
