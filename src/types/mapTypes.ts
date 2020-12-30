export interface FirebaseMap {
  title: string;
  description: string;
  authorName: string;
  authorId: string;
  link: string;
}

export type DisplayableMap = Omit<FirebaseMap, 'link'> & {
  id: string;
  link: URL;
}

export type AddableMap = Omit<FirebaseMap, 'link'> & {
  file: File;
}

export type EditableMap = Omit<FirebaseMap, 'link'> & {
  id: string;
  file: File;
}
