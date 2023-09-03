import { ChangeEvent, FC, useEffect, useState } from 'react';
import styles from './Filter.module.css';
import { jokesApi } from '../../store/service/postService';
import { Record } from '../Record/Record';

export const Filter: FC = () => {
	const [skip, setSkip] = useState(true);
	const [filterState, setFilterState] = useState('');
	const {
		data: jokes,
		error,
		isLoading,
	} = jokesApi.useFetchAllPostsQuery(filterState, {
		skip,
	});

	useEffect(() => {
		if (filterState.length > 3) {
			setSkip(false);
		} else {
			setSkip(true);
		}
	}, [filterState]);

	return (
		<div className={styles.Filter}>
			<input
				onChange={(e: ChangeEvent) =>
					setFilterState((e.target as HTMLInputElement).value)
				}
				value={filterState}
				type='text'
			/>
			{jokes?.total ? <span>{jokes.total}</span> : <></>}
			{isLoading ? <h1>Загрузка...</h1> : <></>}
			{error ? <h1>ошибка</h1> : <></>}
			{jokes?.result.map(joke => <Record joke={joke} />)}
		</div>
	);
};
