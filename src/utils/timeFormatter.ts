export const timeFormatter = (jokeCreated: string): string =>
	jokeCreated.split(' ')[0].split('-').reverse().join('.');
