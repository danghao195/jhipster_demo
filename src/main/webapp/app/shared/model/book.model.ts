export interface IBook {
  id?: number;
  name?: string;
  author?: string;
}

export const defaultValue: Readonly<IBook> = {};
