export interface Fruit {
	id: number;
	french_name: string;
	roman_name?: string;
	type: string;
	description: string;
	filename: string;
	technical_file: string;

    fileURL?: string;
}
