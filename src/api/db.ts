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
  async addAuthor(author: Author) {
    try {
      const db = firebase.firestore();
      await db
        .collection('authors')
        .add({ ...author, website: author.website?.href ?? null });
    } catch (error) {
      console.log({ error });
      alert("Something went wrong. Author is not saved.");
    }
  },
  async deleteAuthor(id: string) {
    try {
      const db = firebase.firestore();
      const batch = db.batch();

      const authorRef = db.collection('authors').doc(id);
      const mapsForAuthor = await db.collection('maps').where('authorId', '==', id).get();
      const mapRefs = mapsForAuthor.docs.map(mapDoc => mapDoc.ref);

      for (const ref of [...mapRefs, authorRef]) {
        batch.delete(ref);
      }

      await batch.commit();
    } catch (error) {
      console.log({ error });
      alert("Something went wrong. Author is not deleted.");
    }
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
      await db.collection('maps').add({ ...map, link: map.link.href });
    } catch (error) {
      console.log({ error });
      alert("Something went wrong. Map is not saved.");
    }
  },
  async deleteMap(id: string) {
    try {
      const db = firebase.firestore();
      await db.collection('maps').doc(id).delete()
    } catch (error) {
      console.log({ error });
      alert("Something went wrong. Map is not deleted.");
    }
  }
};
