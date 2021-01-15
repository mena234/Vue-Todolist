<template>
    <div>
        <Header />
        <router-view></router-view>
    </div>
</template>

<script>
import Header from "./components/layout/header";

export default {
    name: "app",
    components: {
        Header,
    },
};
</script>

<style></style>
