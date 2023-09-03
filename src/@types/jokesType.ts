export interface JokesFetchType {
	total: number;
	result: IJoke[];
}

export type IJoke = {
	categories: any[];
	created_at: string;
	icon_url: string;
	id: string;
	updated_at: string;
	url: string;
	value: string;
};
