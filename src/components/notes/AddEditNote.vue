<template>
  <div
    class="card p-4 mb-5"
    :class="`has-background-${bgColor}-dark`"
  >
    <label
      v-if="label"
      class="field has-text-white">
      {{ label }}
    </label>
    <div class="field">
      <div class="control">
        <textarea
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          class="textarea"
          :placeholder="placeholder"
          ref="textareaRef"
          maxlength="100"
          v-autofocus
        />
      </div>
    </div>

    <div class="field ">
      <div class="control is-flex is-fullwidth 
        is-justify-content-space-between is-flex-direction-row">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script setup>
/* */
import { ref } from 'vue'
import { vAutofocus } from '@/directives/vAutofocus.js'
/* Props */
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  bgColor: {
    type: String,
    default: 'warning'
  },
  placeholder: {
    type: String,
    default: 'Type something...'
  },
  label: {
    type: String
  }
})

/* Emits */
const emit = defineEmits(['update:modelValue'])

/* Focus text area */

const textareaRef = ref(null)
const focusTextArea = () => {
  textareaRef.value.focus()
}

defineExpose({
  focusTextArea
})

</script>

<style>
input:focus,
textarea:focus {
  border-color: yellow; /* Change this to the desired color */
  box-shadow: 0 0 0 0.125em rgb(255, 205, 0); /* Optional: Add a shadow for better visibility */
}
</style>