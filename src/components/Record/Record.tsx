import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Record.module.css';
import { IJoke } from '../../@types/jokesType';
import { timeFormatter } from '../../utils/timeFormatter';

interface RecordProps {
	joke: IJoke;
}
export const Record: FC<RecordProps> = ({ joke }) => (
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
