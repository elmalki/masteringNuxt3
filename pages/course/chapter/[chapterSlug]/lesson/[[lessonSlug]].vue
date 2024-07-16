<script setup lang="ts">
//import {useLocalStorage} from "@vueuse/core";

const course = useCourse();
const route = useRoute();
const chapter = computed(() => {
  return course.chapters.find((chapter) => chapter.slug == route.params.chapterSlug)
})
const lesson = computed(() => {
  return chapter.value.lessons.find((lesson) => lesson.slug == route.params.lessonSlug)
})
const title = computed(() => {
  return chapter.value.title + "-" + lesson.value.title
})
//old useState() but the drawback is when refreshing the data is lost
const progress = useLocalStorage('prgress', () => {
  return [];
})
const isLessonCompleted = computed(() => {
  if (!progress.value[chapter.value.number - 1]) {
    return false
  }
  if (!progress.value[chapter.value.number - 1][lesson.value.number - 1]) {
    return false
  }
  return progress.value[chapter.value.number - 1][lesson.value.number - 1]
})

const toggleComplete = () => {
  if (!progress.value[chapter.value.number - 1]) {
    progress.value[chapter.value.number - 1] = []
  }
  progress.value[chapter.value.number - 1][lesson.value.number - 1] = !isLessonCompleted.value
}
useHead({
  title: title
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
            class="font-normal text-blue-700 rounded bg-blue-300 hover:bg-blue-200 hover:text-blue-700 p-3 text-md"
            :to="lesson.downloadUrl"
        >
          Download Video
        </NuxtLink>
      </div>
      <VideoPlayer v-if="lesson.videoId" :video-id="lesson.videoId"/>
    </div>
    <p class="text-justify">{{ lesson.text }}</p>
    <!--lesson-complete-button v-model="progress"></lesson-complete-button-->
    <!--client-only >
    fix hydration problem
      <template #fallback>

        <p class="text-red-500">Loading data...</p>
      </template>
      <lesson-complete-button :model-value="isLessonCompleted"
                              @update:model-value="toggleComplete"></lesson-complete-button>
    </client-only-->
    <lesson-complete-button :model-value="isLessonCompleted"
                            @update:model-value="throw createError('Could not update!');"></lesson-complete-button>
  </div>
</template>

<style scoped>
</style>
