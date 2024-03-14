<script setup>
import AppForm from "@/components/AppForm.vue";
import {useTodolistData} from "@/store/index.js";
const store = useTodolistData();
</script>

<template>
  <div  class="fixed top-0 w-screen  px-2 h-screen z-10 bg-blend-darken bg-black bg-opacity-70 flex items-center justify-center">
    <div class="p-5 rounded-xl w-1/3 max-xl:w-1/2 max-md:w-full bg-white" @click.stop>
      <AppForm
          @handleSave="store.addTodo()"
          v-if="store.isCreatingModalActive"
      />
      <AppForm
          @handleSave="store.saveTodo()"
          v-else
      />
    </div>
  </div>
</template>