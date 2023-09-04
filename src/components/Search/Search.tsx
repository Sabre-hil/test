import { ChangeEvent, FC, useState, useRef, useEffect } from 'react';
import styles from './Search.module.css';
import { useDebounce } from '../debounce/debounce';
import { RecordResults } from '../RecordResults/RecordResults';

export const Search: FC = () => {
	const [searchState, setSearchState] = useState('');
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		inputRef.current?.focus();
	});

	const debouncedSearchTerm = useDebounce(searchState, 1000);

	return (
		<>
			<input
				ref={inputRef}
				className={styles.input}
				onChange={(e: ChangeEvent) =>
					setSearchState((e.target as HTMLInputElement).value)
				}
				value={searchState}
				type='text'
				placeholder='Search jokes...'
			/>
			<RecordResults searchItem={debouncedSearchTerm} />
		</>
	);
};
