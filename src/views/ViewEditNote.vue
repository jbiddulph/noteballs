<template>
  <div class="edit-note">
    <AddEditNote
      v-model="noteContent"
      bgColor="grey"
      placeholder="Edit note"
      label="Edit Note"
      ref="addEditNoteRef"
    >
      <template #buttons>
        <button
          @click="$router.back()"
          class="button is-link is-light has-text-grey-dark mr-2">Cancel</button
          >
        <button
          @click="handleSavedClicked()"
          :disabled="!noteContent"
          class="button is-link has-background-warning has-text-grey-dark">Save
            note</button
          >
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
/* imports */
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AddEditNote from '@/components/notes/AddEditNote.vue'
import { useStoreNotes } from '@/stores/storeNotes.js'

/* Router */
const route = useRoute()
const router = useRouter()

/* Store */
const storeNotes = useStoreNotes()

/* note */
const noteContent = ref('')
noteContent.value = storeNotes.getNoteContent(route.params.id)

/* Saved Clicked */
const handleSavedClicked = () => {
  storeNotes.updateNote(route.params.id, noteContent.value)
  router.push('/')
}
</script>