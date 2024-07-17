<template>
    <div>
        <div class="prose w-full max-w-2xl h-9 mx-auto">
            <h1 class="text-4xl text-blue-600">Login in to {{ title }}</h1>
            <button class="mt-5 bg-blue-500 text-white text-xl font-bold py-2 px-4 rounded ">Log in with Github
            </button>
        </div>
    </div>
</template>
<script setup lang="ts">
const { title } = useCourse()
</script>