import { observable, computed, action, decorate } from "mobx";

export default class ObservableTodoStore {
    todos = [];

    get completedTodosCount() {
       return this.todos.filter(todo=>!todo.complted);
    }
    addTodo(task) {
        this.todos.push({
            task,
            completed: false,
        });
    }
}
decorate(ObservableTodoStore, {
    todos: observable,
    completedTodosCount: computed,
    addTodo: action
});
//export default ObservableTodoStore;
