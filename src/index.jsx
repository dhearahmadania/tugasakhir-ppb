import * as React from 'react';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

serviceWorkerRegistration.register();
reportWebVitals();
