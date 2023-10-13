<template>
  <div class="notes">

    <AddEditNote
      v-model="newNote"
      placeholder="Add a new note"
      ref="addEditNoteRef"
    >
      <template #buttons>
        
        <div 
          class="has-text-weight-bold has-text-centered p-2 m-0"
          :class="limitedChars ? 'has-text-danger' : 'has-text-warning'"
        >{{ newNote.length }}</div>
        <button
            @click="addNote"
            :disabled="!newNote"
            class="button is-link has-background-warning has-text-grey-dark">Add
            new
            note</button
          >
      </template>
    </AddEditNote>

    <progress
      v-if="!storeNotes.notesLoaded"
      class="progress is-large is-warning"
      max="100"
    />

    <template
      v-else
    >
      <Note 
        v-for="note in storeNotes.notes"
        :key="note.id"
        :note="note"
      />

      <div
        v-if="!storeNotes.notes.length"
        class="is-size-4 has-text-centered has-text-grey-light is-family-monospace py-6"
      >
        There are currently no notes 
      </div>
    </template>
    
  </div>
</template>

<script setup>
/* imports */
import { ref, onMounted } from 'vue'
import Note from '@/components/notes/Note.vue'
import AddEditNote from '@/components/notes/AddEditNote.vue'
import { useStoreNotes } from '@/stores/storeNotes'
import { limitedChars, useWatchCharacters } from '@/use/useWatchCharacters.js'
/* Store */
const storeNotes = useStoreNotes()
/* notes */
const newNote = ref('')
const addEditNoteRef = ref(null)

const addNote = () => {
  storeNotes.addNote(newNote.value)
  newNote.value = ''
  addEditNoteRef.value.focusTextArea()
}

/* watch chars */
useWatchCharacters(newNote)

/* Mounted */
onMounted(() => {
  storeNotes.getNotes()
})
</script>

<style>
input:focus,
textarea:focus {
  border-color: yellow; /* Change this to the desired color */
  box-shadow: 0 0 0 0.125em rgb(255, 205, 0); /* Optional: Add a shadow for better visibility */
}
</style>