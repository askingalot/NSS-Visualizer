import firebase from 'firebase';
import 'firebase/storage';

export const storage = {
  async uploadMap(mapFile: File) : Promise<URL> {
    const store = firebase.storage().ref();
    const mapStore = store.child('maps/' + mapFile.name);
    const result = await mapStore.put(mapFile);
    const link = await result.ref.getDownloadURL();
    return new URL(link);
  }
};
