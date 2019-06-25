<template>
    <div :style="{ backgroundColor: activeColor }">
        <h1>Page 3 - Change background color</h1>
        <p>Enter a color and watch the magic!</p>
        <input type="text" v-model="activeColor">
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeColor: "red"
        }
    }
}
</script>