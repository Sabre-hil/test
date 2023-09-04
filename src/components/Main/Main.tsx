import { FC } from 'react';
import styles from './Main.module.css';
import { Search } from '../Search/Search';

export const Main: FC = () => (
	<section className='container'>
		<Search />
	</section>
);
