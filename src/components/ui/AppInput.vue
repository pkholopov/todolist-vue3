<script setup>
const props = defineProps({
  placeholder: {
    type: String,
    default: '',
  },
  autofocus: {
    type: Boolean,
    default: false
  }
})


</script>

<template>
  <input
      :autofocus="props.autofocus"
      :placeholder=props.placeholder
      class="border border-black text-base outline-0 px-4 py-3"
      type="text"
  />
</template>