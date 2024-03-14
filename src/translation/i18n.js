import { createI18n } from 'vue-i18n';
import messages from "./messages.js";

export const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages,
});

// Выведем в консоль текущую локаль и содержимое сообщений
console.log('Current locale:', i18n.global.locale.value);
console.log('Messages:', messages);
