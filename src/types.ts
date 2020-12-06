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
  author: null;
  link: URL;
}