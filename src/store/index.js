import {defineStore} from "pinia";


import {useToast} from 'vue-toastification'
import {useI18n} from "vue-i18n";

const toast = useToast();

export const useTodolistData = defineStore('todos', {
    state: () => ({
        todos: JSON.parse(localStorage.getItem('todos')) || [],
        isCreatingModalActive: false,
        isModalShown: false,
        inputValue: '',
        editingElement: null,
        isCompleted: false,
        languageOptions: [
            {id: 1, value: 'en', name: 'EN'},
            {id: 2, value: 'ru', name: 'РУ'},
            {id: 3, value: 'fr', name: 'FR'},
            {id: 4, value: 'ar', name: 'AR'},
        ],
        t: useI18n().t
    }),
    actions: {
        openCreateModal() {
            this.isModalShown = true;
            this.isCreatingModalActive = true
        },
        openEditModal(id) {
            this.isModalShown = true;
            this.isCreatingModalActive = false
            this.editingElement = id
            this.todos.map((item) => {
                if (item.id === id) {
                    this.inputValue = item.title;
                }
            })
        },
        closeModal() {
            this.isModalShown = false;
            this.inputValue = '';
        },
        addTodo() {

            const newTodo = {
                id: Date.now(),
                title: this.inputValue,
                isCompleted: this.isCompleted,
            }
            this.todos.push(newTodo);
            toast.success(this.t('Todo added'));
            this.saveToLocalStorage();
            this.closeModal();

        },
        saveTodo() {
            this.todos.map(item => {
                if (item.id === this.editingElement) {
                    item.title = this.inputValue;
                }
            })
            toast.success(this.t('Todo edited'));
            this.saveToLocalStorage();
            this.closeModal();

        },
        taskCompleted(id) {
            this.todos.map(item => {
                if (item.id === id) {
                    item.isCompleted = !item.isCompleted
                    if (item.isCompleted) {
                        toast.success(this.t('Todo completed'));
                    }
                    else {
                        toast.warning(this.t('Todo uncompleted'));
                    }
                }
            });

            this.saveToLocalStorage();
        },
        deleteTodo() {
            this.todos = this.todos.filter(item => item.id !== this.editingElement);
            this.saveToLocalStorage();
            toast.success(this.t('Todo deleted'));
            this.closeModal();
        },
        clearTodos() {
            if (this.todos.length === 0) {
                return toast.error(this.t('The list of todos is empty'));
            }
            else {
                this.todos = [];
                this.saveToLocalStorage();
                toast.success(this.t('All todos deleted'));
            }
        },
        saveToLocalStorage() {
            localStorage.setItem('todos', JSON.stringify(this.todos));
        }
    },
})