<template>
  <div
      class="flex flex-col items-center w-full h-full min-h-screen p-12"
  >
    <div class="mb-12 prose">
      <h1>
				<span class="font-medium">
					<span class="font-bold text-6xl text-orange-800">Mastering Nuxt 3</span>
				</span>
      </h1>
    </div>

    <div class="flex flex-row justify-center flex-grow">
      <div
          class="prose mr-4 p-8 rounded-md min-w-[20ch] max-w-[30ch] flex flex-col bg-amber-100"
      >
        <h3 class="text-center text-orange-800 text-xl">Chapters</h3>
        <div
            class="space-y-1 mb-4 flex flex-col"
            v-for="chapter in chapters"
            :key="chapter.slug"
        >
          <h4 :class="{
							'text-orange-700 font-bold px-3': chapter.slug === $route.params.chapterSlug,
							'text-gray-600': chapter.slug !== $route.params.chapterSlug,
						}">{{ chapter.title }}</h4>
          <NuxtLink
              v-for="(lesson, index) in chapter.lessons"
              :key="lesson.slug"
              class="flex flex-row space-x-1 no-underline prose-sm font-normal py-1 px-4 -mx-4"
              :to="lesson.path"
              :class="{'text-gray-600':lesson.path!==$route.fullPath,
               'text-orange-600':lesson.path===$route.fullPath
                }"
          >
            <span class="text-gray-500">{{ index + 1 }}.</span>
            <span>{{ lesson.title }}</span>
          </NuxtLink>
        </div>
      </div>

      <div class="prose p-12 rounded-md w-[65ch] bg-amber-100">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<script setup>
const { chapters } = useCourse();
</script>
<style scoped>
  /*.router-link-active{
    @apply text-orange-500;
  }*/
</style>
