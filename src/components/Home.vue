<template>
    <div>
        <AddTodo @addTodo="addTodo($event)"/>
        <Todos v-bind:todos="todos" @deleteTodo="deleteTodo($event)" @markComplete="markComplete($event)" />
    </div>
</template>

<script>
import Todos from "../components/Todos";
import { db } from "@/main";
import AddTodo from "../components/AddTodo";

export default {
    name: "home",
    components: {
        Todos,
        AddTodo,
    },
    data() {
        return {
            todos: [],
        };
    },
    mounted() {
        this.getTodos();
    },
    methods: {
        async getTodos() {
            let snapshot = await db.collection("TodosCollection").get();
            const todos = [];
            snapshot.forEach((doc) => {
                let appData = doc.data();
                appData.id = doc.id;
                appData.completed = appData.completed === "true";
                todos.push(appData);
            });
            this.todos = todos;
        },
        async deleteTodo(todoId) {
            this.todos = this.todos.filter((todo) => todo.id !== todoId);
            await db
                .collection("TodosCollection")
                .doc(todoId)
                .delete();
        },

        async addTodo(title) {
          const todo = {
            title,
            completed: false
          }
          await db.collection("TodosCollection").add(todo).then(result => {
            todo.id = result.id;
            this.todos.push(todo)
          });
        },
        async markComplete(todoId) {
            const todo = this.todos.find(todo => todo.id === todoId);
            await db.collection("TodosCollection").doc(todoId).update({
                completed: !todo.completed
            })
            todo.completed = !todo.completed;
        }
    },
};
</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
}

.btn {
    display: inline-block;
    border: none;
    background: #555;
    color: white;
    padding: 7px 20px;
    cursor: pointer;
}

.btn:hover {
    background: #666;
}
</style>
