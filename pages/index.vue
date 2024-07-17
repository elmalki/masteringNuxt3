<template>
    <div>
        <nuxt-link class="underline font-medium mx-auto text-blue-600" :to="firstLesson.path">
            Go to first lesson
        </nuxt-link>
    </div>
</template>
<script setup lang="ts">
const firstLesson = useFirstLesson()
</script>
<style scoped></style>