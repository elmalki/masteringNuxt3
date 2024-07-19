<template>
  <div>
    <div class="prose w-full max-w-2xl h-9 mx-auto">
      <h1 class="text-4xl text-blue-600">Login in to {{ title }}</h1>
      <button class="mt-5 bg-blue-500 text-white text-xl font-bold py-2 px-4 rounded " @click="login()">Log in with
        Github
      </button>
      <br>
      <user-card></user-card>

    </div>
  </div>
</template>
<script setup lang="ts">
const {title} = useCourse();
const supabase = useSupabaseClient();
const user_data = null
let show = ref(false)
const login = async () => {
  const {error,data} = await supabase.auth.signInWithOAuth({
    provider: 'github',
   options:{
     //redirectTo:'http://localhost:3000/'
   }
  });
  if (error)
    console.error(error)
  if (data)
    console.error(user_data)
}
</script>