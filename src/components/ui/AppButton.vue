<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <button class="font-bold text-white transition rounded outline-0 border px-4 py-1">
    {{props.label}}
  </button>
</template>