import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { JokesFetchType } from '../../@types/jokesType';

export const jokesApi = createApi({
	reducerPath: 'jokesApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.chucknorris.io/jokes',
	}),
	endpoints: build => ({
		fetchAllPosts: build.query<JokesFetchType, string>({
			query: data => ({
				url: `/search`,
				params: {
					query: data,
				},
			}),
		}),
	}),
});
