<template>
  <div
    class="card mb-4"
  >
    <div class="card-content">
      <div class="content is-family-monospace is-size-5 ">
        {{ note.content }}
      </div>
      <div class="columns is-mobile has-text-grey-light mt-2">
        <small class="column">{{ dateFormatted }}</small>
        <small class="column has-text-right">{{ charLength }}</small>
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
import { useDateFormat } from '@vueuse/core'
import { useStoreNotes } from '@/stores/storeNotes'
import ModalDeleteNote from '@/components/notes/ModalDeleteNote.vue' 
/* Store */
const storeNotes = useStoreNotes()

/* date formatted */
const dateFormatted = computed(() => {
  let date = new Date(parseInt(props.note.date))
  let formattedDate = useDateFormat(date, 'DD-MM-YYYY @ HH:mm')
  return formattedDate.value
})

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