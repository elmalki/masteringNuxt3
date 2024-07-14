<script setup lang="ts">
const course = useCourse();
const route = useRoute();
const chapter = computed(() => {
  return course.chapters.find((chapter) => chapter.slug == route.params.chapterSlug)
})
const lesson = computed(() => {
  return chapter.value.lessons.find((lesson) => lesson.slug == route.params.lessonSlug)
})
const title = computed(()=>{
  return chapter.value.title+"-"+lesson.value.title
})
useHead({
  title:title
})
</script>
<template>
  <div class="container">
    <div class="text-center">
      <p class="mt-0 mb-1 font-bold uppercase text-slate-400">
        Lesson {{ chapter.number }} - {{ lesson.number }}
      </p>
      <h1 class="inline-block bg-amber-200 text-4xl text-amber-600 underline decoration-amber-400">
        {{ lesson.title }}</h1>
      <div class="flex mt-2 mb-8 space-x-2">
        <NuxtLink
            v-if="lesson.sourceUrl"
            class="font-normal text-gray-500 text-md"
            :to="lesson.sourceUrl"
        >
          Download Source Code
        </NuxtLink>
        <NuxtLink
            v-if="lesson.downloadUrl"
            class="font-normal text-blue-700 rounded bg-blue-400 hover:bg-blue-500 hover:text-blue-900 p-3 text-md"
            :to="lesson.downloadUrl"
        >
          Download Video
        </NuxtLink>
      </div>
      <VideoPlayer v-if="lesson.videoId" :video-id="lesson.videoId" />
    </div>
    <p class="text-justify">{{ lesson.text }}</p>
  </div>
</template>

<style scoped>
</style>
