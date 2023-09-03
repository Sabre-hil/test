import { FC } from 'react';
import styles from './Main.module.css';
import { Filter } from '../Filter/Filter';

export const Main: FC = () => (
	<section className={styles.Main}>
		<Filter />
	</section>
);
