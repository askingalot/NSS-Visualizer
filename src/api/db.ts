import firebase from 'firebase/app';
import 'firebase/firestore';
import {Author, Map} from '../types';

const db = firebase.firestore();

export default {
  onAuthorsChanged(observer: (authors: Author[]) => void) {
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
    db.collection('maps').onSnapshot(async (mapsCollection) => {
      const mapPromises: Promise<Map>[] = [];

      mapsCollection.forEach((mapDoc) => {
        mapPromises.push(
          (async function () {
            const map = mapDoc.data();
            const author = (await db.doc(map.author.path).get()).data() ?? {
              firstName: '',
              lastName: ''
            };

            return {
              id: mapDoc.id,
              title: map.title,
              description: map.description,
              link: new URL(map.link),
              author: `${author.firstName} ${author.lastName}`,
              createdDateTime: map.createdDateTime,
              createdBy: map.createdBy,
              updatedDateTime: map.updatedDateTime,
              updatedBy: map.updatedBy
            };
          })()
        );
      });

      const maps = await Promise.all(mapPromises);
      observer(maps);
    });
  },
  addMap(map: Map) {
  }
};
