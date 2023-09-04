import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Record.module.css';
import { IJoke } from '../../@types/jokesType';
import { timeFormatter } from '../../utils/timeFormatter';

interface RecordProps {
	joke: IJoke;
}
export const Record: FC<RecordProps> = ({ joke }) => (
	// 	new Date().toISOString()
	// "2016-02-18T23:59:48.039Z"
	// new Date().toISOString().split('T')[0];
	// "2016-02-18"
	// new Date().toISOString().replace('-', '/').split('T')[0].replace('-', '/');
	// "2016/02/18"

	// new Date().toLocaleString().split(',')[0]
	// "2/18/2016"

	<Link target='_blank' to={joke.url} className={styles.record}>
		<p className={styles['record-text']}>{joke.value}</p>
		<div className={styles['record-info']}>
			<span className={styles['record-id']}>{joke.id}</span>
			<span className={styles['record-time']}>
				{timeFormatter(joke.created_at)}
			</span>
		</div>
	</Link>
);
