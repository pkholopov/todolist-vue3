<script setup>

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  }
});

const emits = defineEmits(['handleChange']);


const handleChange = (value) => {
  emits('handleChange', value)
}


</script>
<template>
  <select class="border  text-base outline-0"
          @change="handleChange($event.target.value)"
  >
    <option
        v-for="item in props.items"
        :key="item.id"
        :value="item.value"
        >
        {{item.name}}
    </option>
  </select>
</template>
