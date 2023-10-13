import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDU6vCxNJXjYBoipykhw0TS2ls1NNF23vk',
  authDomain: 'noteballs-fe3fe.firebaseapp.com',
  projectId: 'noteballs-fe3fe',
  storageBucket: 'noteballs-fe3fe.appspot.com',
  messagingSenderId: '661750065619',
  appId: '1:661750065619:web:74d4e0620fd3b23071e726',
  measurementId: 'G-KLPPSMCXEF'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export {
  db,
  auth
}