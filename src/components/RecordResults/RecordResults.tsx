import { FC, useEffect, useState } from 'react';
import styles from './RecordResults.module.css';
import { Record } from '../Record/Record';
import { jokesApi } from '../../store/service/postService';

interface RecordResultsProps {
	searchItem: string;
}

export const RecordResults: FC<RecordResultsProps> = ({
	searchItem,
}: RecordResultsProps) => {
	const [filteredSearchTerm, setFilteredSearchTerm] = useState(searchItem);
	const [skip, setSkip] = useState(true);
	const {
		data: jokes,
		error,
		isLoading,
	} = jokesApi.useFetchAllPostsQuery(filteredSearchTerm, {
		skip,
	});

	useEffect(() => {
		if (searchItem.length >= 3) {
			setSkip(false);
			setFilteredSearchTerm(searchItem);
		} else {
			setSkip(true);
		}
	}, [searchItem]);

	return (
		<>
			{jokes?.total ? (
				<p className={styles.found}>Found jokes: {jokes.total}</p>
			) : (
				<></>
			)}
			{isLoading ? <h1 className={styles.loading}>Загрузка...</h1> : <></>}
			{error ? <h1 className={styles.error}>ошибка</h1> : <></>}
			<div className={styles.records}>
				{jokes?.result.map(joke => <Record key={joke.id} joke={joke} />)}
			</div>
		</>
	);
};
