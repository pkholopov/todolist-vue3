<script setup>

import AppButton from "@/components/ui/AppButton.vue";
import {useTodolistData} from "@/store";
import AppSelect from "@/components/ui/AppSelect.vue";
import {useI18n} from "vue-i18n";
const store = useTodolistData();

const {locale, t} = useI18n();

const changeLanguage = (value) => {
  locale.value = value
}

</script>

<template>
  <header class="fixed top-0 left-0 right-0 w-full h-[80px] bg-gray-900">
    <div class="container mx-auto h-full flex items-center justify-between">
      <div class="uppercase text-white text-3xl font-bold">Todolist</div>
      <div class="flex gap-4 items-center max-sm:gap-2">
        <AppSelect
            class="border-black rounded-full w-[55px] h-[55px] px-1 max-sm:w-[45px] max-sm:h-[45px] max-sm:px-0"
            :items="store.languageOptions"
            @handleChange="changeLanguage($event)"
        />
      <AppButton
          class="border-white uppercase tracking-widest text-white font-bold bg-transparent hover:bg-white hover:text-black"
          :label="t('create')"
          @click="store.openCreateModal()"
          @keyup.ctrl = "store.openCreateModal()"
      />
      </div>
    </div>
  </header>
</template>