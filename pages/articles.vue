<template>
  <main
    class="flex flex-col mx-10 sm:mx-20 xl:max-w-5xl xl:mx-auto space-y-3 mb-10 min-h-screen"
  >
    <h1 class="font-bold text-4xl text-gray-600">Articles</h1>
    <div class="grid lg:grid-cols-2 gap-8">
      <div
        class="py-6 border-b flex flex-col space-y-3"
        v-for="article in articles"
        :key="article.title"
      >
        <NuxtLink
          class="text-lg sm:text-xl font-bold text-gray-600"
          :to="article.to"
          :target="article.target"
        >
          {{ article.title }}</NuxtLink
        >
        <div class="flex space-x-3 text-sm text-gray-500 my-2">
          <span>{{ article.date }} </span>
          <span>·</span>
          <span>{{ article.readTime }} read</span>
        </div>
        <p class="text-gray-600 text-sm max-w-lg">{{ article.excerpt }}</p>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const articles = useArticles()
</script>
