<template>
  <div>
    <NuxtLayout name="admin-template">
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
/*
using composable to use layouts
definePageMeta({
  layout:'admin-template'
})*/
</script>
