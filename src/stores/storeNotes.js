// stores/counter.js
import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return { 
      notes: [
        {
          id: '1',
          content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum nobis corrupti, veritatis suscipit accusantium ipsum nesciunt? Facilis reiciendis accusantium ipsam laborum qui omnis quibusdam autem voluptas nulla, maiores deleniti perferendis!,'
        },
        {
          id: '2',
          content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. maiores deleniti perferendis'
        }
      ]
     }
  },
  actions: {
    addNote(newNoteContent) {
      let curDate = new Date().getTime()
      let id = curDate.toString()
      let note = {
        id,
        content: newNoteContent
      }
      this.notes.unshift(note)
    },
    updateNote(id, content) {
      let index = this.notes.findIndex(note => note.id === id)
      this.notes[index].content = content
    },
    deleteNote(idToDelete) {
      this.notes = this.notes.filter(note => note.id !== idToDelete)
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