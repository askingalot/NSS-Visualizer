import { Auditable } from './baseTypes';
import { AddableMap, DisplayableMap } from './mapTypes';

export type Author = Auditable & {
  id: string;
  firstName: string;
  lastName: string;
  cohort: string;
  website: URL | null;
}

export interface User {
  name: string;
}

export interface MapListProps {
  maps: DisplayableMap[];
  deleteMap: (id: string) => Promise<void>;
}

export interface MapCardProps {
  map: DisplayableMap;
  deleteMap: (id: string) => Promise<void>;
}

export interface MapFormProps {
  saveMap: (m: AddableMap) => Promise<void>;
  authors: Author[];
}

export interface AuthorListProps {
  authors: Author[];
  deleteAuthor: (id: string) => Promise<void>;
}

export interface AuthorCardProps {
  author: Author;
  deleteAuthor: (id: string) => Promise<void>;
}

export interface AuthorFormProps {
  saveAuthor: (a: Author) => Promise<void>;
}
