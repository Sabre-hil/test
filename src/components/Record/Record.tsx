import { FC } from 'react';
import styles from './Record.module.css';
import { IJoke } from '../../@types/jokesType';

interface RecordProps {
	joke: IJoke;
}
export const Record: FC<RecordProps> = ({ joke }) => (
	<div className={styles.Record}>
		<span>{joke.value}</span>
	</div>
);
