import { observable, computed, action, decorate } from "mobx";

export default class NumberStore {
    num = 0;

    get mynum() {
        return this.num;
    }
    increment() {
        this.num++;
    }
    decrement() {
        this.num--;
    }
}
decorate(NumberStore, {
    num: observable,
    mynum: computed,
    increment: action,
    decrement: action            
});


