import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { jokesApi } from './service/postService';

export const store = configureStore({
	reducer: {
		[jokesApi.reducerPath]: jokesApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(jokesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
