<template>
  <div
    class="card mb-4"
  >
    <div class="card-content">
      <div class="content">
        {{ note.content }}
      </div>
      <div class="has-text-right has-text-grey-light mt-2">
        <small>{{ charLength }}</small>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink
        :to="`/editNote/${note.id}`"
        class="card-footer-item">
        Edit
      </RouterLink>
      <a
        @click.prevent="modals.deleteNote = true"
        class="card-footer-item">Delete</a
      >
    </footer>
    <ModalDeleteNote 
      v-if="modals.deleteNote" 
      v-model="modals.deleteNote"
      :noteId="note.id"
    />
  </div>
</template>

<script setup>
/* imports */
import { computed, reactive } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes'
import ModalDeleteNote from '@/components/notes/ModalDeleteNote.vue' 
/* Store */
const storeNotes = useStoreNotes()
/* Props */
const props = defineProps({
  note: {
    type: Object,
    required: true
  }
})

/* char length */
const charLength = computed(() => {
  let length = props.note.content.length
  let description = length > 1 ?
  'characters' : 'character'
  return `${length} ${description}`
})

/* modals */
const modals = reactive({
  deleteNote: false
})
</script>