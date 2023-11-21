import React from 'react';
import styles from './Profile.module.css';

const Profile = () => {
	return (
		<div className={styles.main}>
			<div className={styles.overlay}></div>
			<div className={styles.background}></div>
			<div className='container'>
				<div className={styles.profile}>
					<h2>About Us</h2>
					<img
						src='https://avatars.githubusercontent.com/u/102374735?s=400&u=6da0e1e4e44b6923f478ed8b31bf8d229ef7fbd3&v=4'
						alt='Profile'
						className='profile-image'
					/>
					<p>
						dhear's here, hehe. hello!<br></br>
						Do you enjoy reading books?<br></br>
						There's a sense of comfort when you dive into the storyline of a book, did you know that?
						<br></br>
						Hope this application can create a new experience for you, just like exploring every corner of a
						library.<br></br>I won't reveal more, you'll have to find out for yourself!<br></br>
						<br></br>I created this app as part of my final project, and it has been so much fun.<br></br>
						I'll keep working to improve it, so stay tuned! xoxo
					</p>
				</div>
			</div>
		</div>
	);
};

export default Profile;
