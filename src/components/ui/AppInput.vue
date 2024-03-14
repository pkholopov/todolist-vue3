<script setup>
const props = defineProps({
  placeholder: {
    type: String,
    default: '',
  },
  autofocus: {
    type: Boolean,
    default: false
  },

  modelValue: {
    type: String
  }
})

const emits = defineEmits(['update:modelValue'])

</script>

<template>
  <input
      :autofocus="props.autofocus"
      :placeholder=props.placeholder
      class="border border-black text-base outline-0 px-4 py-3"
      type="text"
      :value="props.modelValue"
      @input="emits('update:modelValue', $event.target.value)"
  />
</template>
