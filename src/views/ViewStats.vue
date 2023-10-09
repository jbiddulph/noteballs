<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of notes</td>
          <td>{{ storeNotes.totalNoteCount }}</td>
        </tr>
        <tr>
          <td>Number of characters (all notes)</td>
          <td>{{ storeNotes.totalCharactersCount }}</td>
        </tr>
      </tbody>
    </table>
    <input 
      v-model="loveNoteballs"
      class="input"
      type="text"
      placeholder="Do you love noteballs?"
      v-autofocus
    >
  </div>
</template>

<script setup>
/* Import */
import { ref } from 'vue'
import { useStoreNotes } from '@/stores/Storenotes'
import { vAutofocus } from '@/directives/vAutofocus.js'
import { useWatchCharacters } from '@/use/useWatchCharacters.js'

/* store */
const storeNotes = useStoreNotes()

/* love noteballs */
const loveNoteballs = ref('')
useWatchCharacters(loveNoteballs, 50)
</script>