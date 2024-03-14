<script setup>
import {useTodolistData} from "@/store/index.js";

import AppModal from "@/components/ui/AppModal.vue";
import AppHeader from "@/components/AppHeader.vue";
import TodosSection from "@/components/TodosSection.vue";

const store = useTodolistData();
</script>
<template>
  <div
      class="app relative bg-gray-100 h-screen"
      @keyup.esc = "store.closeModal()"
  >
    <AppModal
        v-if="store.isModalShown"
        @click="store.closeModal()"
    />
    <AppHeader />
    <main>
      <TodosSection />
    </main>
  </div>
</template>