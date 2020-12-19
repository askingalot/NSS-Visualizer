import firebase from 'firebase/app';
import 'firebase/firestore';
import { Author, Map } from '../types';

export default {
  onAuthorsChanged(observer: (authors: Author[]) => void) {
    const db = firebase.firestore();
    db.collection('authors').onSnapshot((authorsCollection) => {
      const authors: Author[] = [];

      authorsCollection.forEach((authorDoc) => {
        const author = authorDoc.data();

        authors.push({
          id: authorDoc.id,
          firstName: author.firstName,
          lastName: author.lastName,
          cohort: author.cohort,
          website: author.website ? new URL(author.website) : null,
          createdDateTime: author.createdDateTime,
          createdBy: author.createdBy,
          updatedDateTime: author.updatedDateTime,
          updatedBy: author.updatedBy
        });
      });

      observer(authors);
    });
  },

  onMapsChanged(observer: (maps: Map[]) => void) {
    const db = firebase.firestore();
    db.collection('maps').onSnapshot(async (mapsCollection) => {
      observer(
        mapsCollection.docs.map(mapDoc => {
          const map = mapDoc.data();
          return {
            id: mapDoc.id,
            title: map.title,
            description: map.description,
            link: new URL(map.link),
            authorName: map.authorName,
            authorId: map.authorId,
            createdDateTime: map.createdDateTime,
            createdBy: map.createdBy,
            updatedDateTime: map.updatedDateTime,
            updatedBy: map.updatedBy
          };
        })
      );
    });
  },
  addMap(map: Map) {
    return;
  }
};
