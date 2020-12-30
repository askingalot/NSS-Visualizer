import firebase from 'firebase/app';
import { AddableMap, DisplayableMap } from '../types/mapTypes';
import { Author } from '../types/types';
import { db } from './db';
import { storage } from './storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDtW-sa7H0UTWKDBBftHCGAPS0nuJyci6I',
  authDomain: 'nss-visualizer.firebaseapp.com',
  databaseURL: 'https://nss-visualizer.firebaseio.com',
  projectId: 'nss-visualizer',
  storageBucket: 'nss-visualizer.appspot.com',
  messagingSenderId: '448214826520',
  appId: '1:448214826520:web:7c08c0302f4aed1a874d6d',
  measurementId: 'G-8E26HSN5LG'
};

export function initializeApi() {
  firebase.initializeApp(firebaseConfig);
}


export function observeAuthorChanges(observer: (authors: Author[]) => void) {
  db.onAuthorsChanged(observer);
}

export async function addAuthor(author: Author) {
  await db.addAuthor(author);
}

export async function deleteAuthor(id: string) {
  await db.deleteAuthor(id);
}


export function observeMapChanges(observer: (maps: DisplayableMap[]) => void) {
  db.onMapsChanged(observer);
}

export async function addMap(map: AddableMap) {
  const link = await storage.uploadMap(map.file)
  await db.addMap(map, link);
}

export async function deleteMap(id: string) {
  await db.deleteMap(id);
}