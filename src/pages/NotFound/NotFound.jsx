import * as React from 'react';

const NotFound = () => {
	return (
		<div
			style={{
				width: '100%',
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<h1
				style={{
					fontSize: '1rem',
					fontWeight: 'bold',
				}}>
				404 - Not Found
			</h1>
		</div>
	);
};

export default NotFound;
