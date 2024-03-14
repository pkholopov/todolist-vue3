<script setup>

import AppInput from "@/components/ui/AppInput.vue";
import AppButton from "@/components/ui/AppButton.vue";
import {useTodolistData} from "@/store/index.js";
import {useToast} from "vue-toastification";
import {useI18n} from "vue-i18n";

const toast = useToast();


const store = useTodolistData();

const {t} = useI18n();


const emits = defineEmits(['handleSave',]);


const handleSave = () => {
  if(store.inputValue === ''){
    return toast.error(t('This field should not be empty'));
  }
    emits('handleSave')
}

</script>

<template>
  <form @submit.prevent="handleSave()" class="w-full flex flex-col gap-10">
    <div class="flex items-center justify-between w-full">
      <h2>
        {{t('Todo for today')}}
        <span v-if="store.isCreatingModalActive" class="text-green-500">[{{ t('Creating') }}]</span>
        <span v-else class="text-orange-500">[{{ t('Editing') }}]</span>
      </h2>
      <i class="pi pi-times text-red-600 font-bold text-2xl cursor-pointer" @click="store.closeModal()"></i>
    </div>
    <label class="flex flex-col gap-2">
      {{ t('Todo title') }}
      <AppInput
          :placeholder="t('Enter todo name')"
          :autofocus="!!store.isModalShown"
          class="rounded"
          @input="store.inputValue = $event.target.value"
      />
    </label>
    <div class="flex gap-5 justify-end items-center">
      <AppButton
          v-if="!store.isCreatingModalActive"
          :label="t('delete')"
          class="bg-red-600 hover:bg-red-800 uppercase"
          @click="store.deleteTodo()"
      />
      <AppButton
          :label="t('save')"
          type="submit"
          class="bg-green-600 hover:bg-green-800 uppercase"
      />
    </div>
  </form>
</template>