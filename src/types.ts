interface Auditable {
  createdDateTime: Date;
  createdBy: string;
  updatedDateTime: Date;
  updatedBy: string;
}

export type Author = Auditable & {
  id: string;
  firstName: string;
  lastName: string;
  cohort: string;
  website: URL | null;
}

export interface Map extends Auditable {
  id: string;
  title: string;
  description: string;
  authorName: string;
  authorId: string;
  link: URL;
}

export interface User {
  name: string;
}

export interface MapListProps {
  maps: Map[];
  deleteMap: (id: string) => Promise<void>;
}

export interface MapCardProps {
  map: Map;
  deleteMap: (id: string) => Promise<void>;
}

export interface MapFormProps {
  saveMap: (m: Map) => Promise<void>;
  authors: Author[];
}

export interface AuthorListProps {
  authors: Author[];
}

export interface AuthorFormProps {
  saveAuthor: (a: Author) => Promise<void>;
}

