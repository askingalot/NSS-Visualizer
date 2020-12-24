import firebase from 'firebase/app';
import 'firebase/firestore';
import { Author, Map } from '../types';

export default {
  onAuthorsChanged(observer: (authors: Author[]) => void) {
    const db = firebase.firestore();
    db.collection('authors').onSnapshot(async (authorsCollection) => {
      observer(
        authorsCollection.docs.map(authorDoc => {
          const author = authorDoc.data();
          return {
            id: authorDoc.id,
            firstName: author.firstName,
            lastName: author.lastName,
            cohort: author.cohort,
            website: author.website ? new URL(author.website) : null,
            createdDateTime: author.createdDateTime,
            createdBy: author.createdBy,
            updatedDateTime: author.updatedDateTime,
            updatedBy: author.updatedBy
          };
        })
      );
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
  async addMap(map: Map) {
    try {
      const db = firebase.firestore();
      await db.collection('maps').add({...map, link: map.link.href});
    } catch (error) {
      console.log({error});
      alert("Something went wrong. Map is not saved.");
    }
  }
};
