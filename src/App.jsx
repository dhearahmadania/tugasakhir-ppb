import './App.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import MostPopular from './pages/MostPopular/MostPopular';

import BookSearch from './pages/BookSearch/BookSearch';
import WeeklyPopular from './pages/WeeklyPopular/WeeklyPopular';
import MonthlyPopular from './pages/MonthlyPopular/MonthlyPopular';
import YearlyAwarded from './pages/YearlyAwarded/YearlyAwarded';
import BookDetail from './pages/BookDetail/BookDetail';

import Layout from './component/Layout/Layout';
import NotFound from './pages/NotFound/NotFound';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='search' element={<BookSearch />} />
					<Route path='book/:id' element={<BookDetail />} />
					<Route path='popular' element={<MostPopular />} />
					<Route path='weekly' element={<WeeklyPopular />} />
					<Route path='monthly' element={<MonthlyPopular />} />
					<Route path='awarded' element={<YearlyAwarded />} />
					<Route path='profile' element={<Profile />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
