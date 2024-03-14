<script setup>


const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  dataCompleted: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(['openEditModal', 'taskCompleted']);

const openEditModal = () => {
  emits('openEditModal');
}
const taskCompleted = () => {
  emits('taskCompleted');
}

</script>

<template>
<div class="flex justify-between items-center rounded-xl h-[88px] pl-4 bg-white shadow-xl overflow-hidden" :data-completed="props.dataCompleted">
  <h3  class="text-xl text-gray-900 capitalize font-bold" :class="{ 'line-through text-amber-500': props.dataCompleted }">{{props.title}}</h3>
  <div class="flex items-center gap-2 w-6/12 h-full max-md:h-1/2 bg-[#f6f6f6]">
  <button
      class="flex items-center justify-center w-1/2 h-full border border-green-500"
      @click="taskCompleted()"
  >
  <i class="pi pi-check text-green-500 font-bold"></i>
  </button>
  <button
      class="flex items-center justify-center w-1/2 h-full border border-amber-500 rounded-r-xl"
      @click="openEditModal()"
  >
  <i class="pi pi-pencil text-amber-500 font-bold"></i>
  </button>
  </div>
</div>
</template>