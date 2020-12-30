import firebase from 'firebase';
import 'firebase/storage';

export const storage = {
  async uploadMap(mapFile: File) {
    const store = firebase.storage().ref();
    const mapStore = store.child('maps/' + mapFile.name);
    await mapStore.put(mapFile);
  }
};
