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
      <a href="#" class="card-footer-item">Edit</a>
      <a
        @click.prevent="handleDeleteClicked"
        class="card-footer-item">Delete</a
      >
    </footer>
  </div>
</template>

<script setup>
/* imports */
import { computed } from 'vue'

/* Props */
const props = defineProps({
  note: {
    type: Object,
    required: true
  }
})

/* Emits */
const emit = defineEmits(['deleteClicked']) 

/* char length */
const charLength = computed(() => {
  let length = props.note.content.length
  let description = length > 1 ?
  'characters' : 'character'
  return `${length} ${description}`
})


/* handleDeleteClicked */
const handleDeleteClicked = () => {
  emit('deleteClicked', props.note.id)
}
</script>