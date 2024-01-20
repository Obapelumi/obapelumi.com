<template>
  <div class="space-y-4 w-full">
    <div
      class="py-6 border-b flex flex-col sm:flex-row gap-8"
      v-for="work in works"
      :key="work.title"
    >
      <img
        :src="work.imagePath"
        :alt="work.title"
        class="w-full sm:h-48 sm:w-56 rounded-lg"
      />
      <div class="flex flex-col space-y-3">
        <NuxtLink
          class="text-lg sm:text-xl font-bold text-gray-600"
          :to="work.to"
          :target="work.target"
        >
          {{ work.title }}
        </NuxtLink>
        <div class="flex space-x-3 items-center text-sm">
          <div class="rounded-full bg-gray-600 text-white font-bold px-2">
            {{ work.year }}
          </div>
          <span>·</span>
          <NuxtLink
            :to="work.company.website"
            target="__blank"
            class="text-gray-500 hover:text-gray-600 hover:underline hover:underline-offset-2"
          >
            {{ work.company.name }}
          </NuxtLink>
        </div>
        <p class="text-gray-600 text-sm max-w-lg">{{ work.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ works: Work[] }>()
</script>
