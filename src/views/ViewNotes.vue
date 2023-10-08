<template>
  <div class="notes">

    <div class="card has-background-warning-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            v-model="newNote"
            class="textarea"
            placeholder="Add a new note"
            ref="newNoteRef"
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            @click="addNote"
            :disabled="!newNote"
            class="button is-link has-background-warning">Add
            new
            note</button
          >
        </div>
      </div>
    </div>

    <Note 
      v-for="note in notes"
      :key="note.id"
      :note="note"
      @deleteClicked="deleteNote"
    />
    
  </div>
</template>

<script setup>
/* imports */
import { ref } from 'vue'
import Note from '@/components/notes/Note.vue'
/* notes */
const newNote = ref('')
const newNoteRef = ref(null)

const notes = ref([
  {
    id: 1,
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum nobis corrupti, veritatis suscipit accusantium ipsum nesciunt? Facilis reiciendis accusantium ipsam laborum qui omnis quibusdam autem voluptas nulla, maiores deleniti perferendis!,'
  },
  {
    id: 2,
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. maiores deleniti perferendis'
  }
])

const addNote = () => {
  let curDate = new Date().getTime()
  let id = curDate.toString()
  let note = {
    id,
    content: newNote.value
  }
  notes.value.unshift(note)

  newNote.value = ''
  newNoteRef.value.focus()
}

/* DeleteNote */
const deleteNote = idToDelete => {
  notes.value = notes.value.filter(note => { return note.id !== idToDelete })
}
</script>