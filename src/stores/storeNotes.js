// stores/counter.js
import { defineStore } from 'pinia'
import { 
  collection, doc, onSnapshot, 
  addDoc, deleteDoc, updateDoc, 
  query, orderBy 
} from 'firebase/firestore' 
import { db } from '@/js/firebase'

const notesCollectionRef = collection(db, 'notes')
const notesCollectionQuery = query(notesCollectionRef, orderBy('date', 'desc'))


export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return { 
      notes: [],
      notesLoaded: false,
     }
  },
  actions: {
    async getNotes() {
      this.notesLoaded = false
      onSnapshot(notesCollectionQuery, (querySnapshot) => {
        let notes = []
        querySnapshot.forEach((doc) => {
          let note = {
            id: doc.id,
            content: doc.data().content,
            date: doc.data().date,
          }
          notes.push(note)
        })
        this.notes = notes
        this.notesLoaded = true
      })
    },
    async addNote(newNoteContent) {
      let curDate = new Date().getTime()
      let date = curDate.toString()
      // this.notes.unshift(note)
      await addDoc(notesCollectionRef, {
        content: newNoteContent,
        date
      })
    },
    async updateNote(id, content) {
      await updateDoc(doc(notesCollectionRef, id), {
        content
      });
    },
    async deleteNote(idToDelete) {
      await deleteDoc(doc(notesCollectionRef, idToDelete))
    }
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter(note => note.id === id)[0].content
      }
    },
    totalNoteCount: (state) => {
      return state.notes.length
    },
    totalCharactersCount: (state) => {
      let count = 0
      state.notes.forEach(note => {
        count += note.content.length
      })
      return count
    }
  }
})