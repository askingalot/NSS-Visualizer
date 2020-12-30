import firebase from 'firebase/app';
import 'firebase/firestore';
import { Author } from '../types/types';
import { AddableMap, DisplayableMap, FirebaseMap } from '../types/mapTypes';
import { cloneExcept } from '../utils';

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

  onMapsChanged(observer: (maps: DisplayableMap[]) => void) {
    const db = firebase.firestore();
    db.collection('maps').onSnapshot(async (mapsCollection) => {
      observer(
        mapsCollection.docs.map(mapDoc => {
          const map = mapDoc.data() as FirebaseMap;
          return {
            id: mapDoc.id,
            title: map.title,
            description: map.description,
            link: new URL(map.link),
            authorName: map.authorName,
            authorId: map.authorId
          };
        })
      );
    });
  },

  async addMap(map: AddableMap, link: URL) {
    try {
      const newMap: FirebaseMap = {
        ...cloneExcept(map, 'file'),
        link: link.href
      };

      await firebase.firestore()
        .collection('maps')
        .add(newMap);

    } catch (error) {
      console.log({ error });
      alert("Something went wrong. Map is not saved.");
    }
  },

  async deleteMap(id: string) {
    try {

      await firebase.firestore()
        .collection('maps')
        .doc(id)
        .delete()

    } catch (error) {
      console.log({ error });
      alert("Something went wrong. Map is not deleted.");
    }
  }
};
