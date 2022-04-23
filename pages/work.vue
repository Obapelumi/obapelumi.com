<template>
  <main
    class="flex flex-col mx-10 sm:mx-20 xl:max-w-5xl xl:mx-auto min-h-screen"
  >
    <h1 class="font-bold text-4xl text-gray-600">Work</h1>
    <ResourceWork class="mt-4" :works="works" />
  </main>
</template>

<script setup lang="ts">
const works = useWork()
</script>
