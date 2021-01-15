<template>
    <div class="todo-item" v-bind:class="{ 'is-complete': todo.completed }">
        <p>
            <input type="checkbox" @change="$emit('markComplete', null)">
            {{ todo.title }}
            <button class="del" @click="$emit('deleteTodo', null)">x</button>
        </p>
    </div>
</template>

<script>
// import { db } from '../main';
export default {
    name: "TodoItem",
    props: ["todo"],
    data: () => ({
        completed: false,
    })
};
</script>

<style scoped>
.todo-item {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
}

.is-complete {
    text-decoration: line-through;
}

.del {
    background: red;
    color: white;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
}
</style>
