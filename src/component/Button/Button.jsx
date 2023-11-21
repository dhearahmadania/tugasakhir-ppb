import * as React from 'react';
import styles from './Button.module.css';

const Button = ({ type = 'button', children, ...props }) => {
	return (
		<button className={styles.button} type={type} {...props}>
			{children}
		</button>
	);
};

export default Button;
