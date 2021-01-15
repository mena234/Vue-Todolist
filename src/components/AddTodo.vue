<template>
    <div>
        <form @submit="addTodo">
            <input v-model='title' type="text" name="title" placeholder="Add Todo..." />
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>

<script>
export default {
    name: "AddTodo",
    data: () => ({
        title: ''
    }),
    methods: {
        addTodo(event) {
            this.$emit('addTodo', this.title)
            event.preventDefault();
            this.title = '';
        }
    }
};
</script>

<style scoped>
    form {
        display: flex
    }

    input[type="text"] {
        flex: 10;
        padding: 10px
    }

    input[type="submit"] {
        flex: 2
    }
</style>
