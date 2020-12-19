interface Auditable {
  createdDateTime: Date;
  createdBy: string;
  updatedDateTime: Date;
  updatedBy: string;
}

export interface Author extends Auditable {
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
  user: User;
}

export interface MapFormProps {
  saveMap: (m: Map) => void;
  authors: Author[];
}
