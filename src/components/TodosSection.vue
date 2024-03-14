<script setup>

import {useTodolistData} from "@/store/index.js";

const store = useTodolistData();

const {t} = useI18n();

import TodoItem from "@/components/TodoItem.vue";
import AppButton from "@/components/ui/AppButton.vue";
import {useI18n} from "vue-i18n";
</script>

<template>
  <section>
    <div class="container mx-auto">
      <div class="pt-24 mb-8 flex justify-between items-center max-sm:flex-col max-sm:gap-5 max-sm:items-start max-sm:mb-5">
      <h1  class="text-4xl max-md:text-2xl font-bold" v-if="store.todos.length > 0">{{ t('List of todos') }}</h1>
      <h1 class="text-4xl max-md:text-2xl font-bold" v-else>{{ t('The list of todos is empty') }}</h1>
        <AppButton
            v-if="store.todos.length > 0"
            :label="t('Delete All')"
            class="bg-black hover:bg-transparent hover:text-black border-black"
            @click="store.clearTodos()"
        />
        <AppButton
            v-else
            :label="t('create')"
            class="bg-black hover:bg-transparent hover:text-black border-black"
            @click="store.openCreateModal()"
            @keyup.ctrl = "store.openCreateModal()"
        />
      </div>
      <div class="grid grid-cols-3 gap-8 max-md:grid-cols-2 max-sm:grid-cols-1">
        <TodoItem
            v-for="todo in store.todos"
            :key="todo.id"
            :title="todo.title"
            :dataCompleted="todo.isCompleted"
            @openEditModal="store.openEditModal(todo.id)"
            @taskCompleted="store.taskCompleted(todo.id)"
        />
      </div>
    </div>
  </section>
</template>
