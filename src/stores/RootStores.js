import TodoStore from "./TodoStore";
import NumberStore from './NumberStore';

export default class RootStores {
    constructor() {
        this.todostore = new TodoStore(this);
        this.numstore = new NumberStore(this);
    }
}


