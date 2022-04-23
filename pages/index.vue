<template>
  <main class="flex flex-col min-h-screen">
    <section class="py-8">
      <div
        class="flex flex-col lg:grid lg:grid-cols-3 items-center mx-10 sm:mx-20 xl:max-w-5xl xl:mx-auto"
      >
        <div class="flex justify-center items-center w-full lg:order-2">
          <img
            src="/images/obapelumi.jpg"
            class="sm:h-72 sm:w-72 rounded-full mb-8 lg:mb-0"
          />
        </div>
        <div
          class="col-span-2 flex flex-col items-center lg:order-1 lg:items-start"
        >
          <span class="text-xs font-semibold text-gray-500 tracking-[7px]"
            >ABOUT ME</span
          >
          <div class="my-4 font-semibold text-center text-3xl lg:text-left">
            <h1>Hi, I'm Emmanuel,</h1>
            <h1>Full-stack Web Developer</h1>
          </div>
          <p class="text-gray-600 max-w-lg text-center lg:text-left">
            I am a passionate Software developer who is experienced in
            delivering high-quality cloud technologies with stellar user
            experiences that empower people and businesses.
          </p>
        </div>
      </div>
    </section>
    <section class="bg-gray-100 py-8">
      <div class="flex flex-col mx-10 sm:mx-20 xl:max-w-5xl xl:mx-auto">
        <div class="flex justify-between w-full">
          <h4 class="text-gray-600 text-lg">Featured articles</h4>
          <NuxtLink
            to="/articles"
            class="text-gray-400 hover:text-gray-600 hover:underline hover:underline-offset-2"
            >View All</NuxtLink
          >
        </div>
        <div class="grid my-4 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="article in featuredArticles"
            :key="article.title"
            class="bg-white p-4 flex flex-col"
          >
            <NuxtLink
              :to="article.to"
              :target="article.target"
              class="text-lg text-gray-700 font-bold"
            >
              {{ article.title }}
            </NuxtLink>
            <div class="flex space-x-3 text-sm text-gray-500 my-2">
              <span>{{ article.date }} </span>
              <span>·</span>
              <span>{{ article.readTime }} read</span>
            </div>
            <p class="text-gray-600 text-sm">{{ article.excerpt }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-8">
      <div class="flex flex-col mx-10 sm:mx-20 xl:max-w-5xl xl:mx-auto">
        <div class="flex justify-between w-full">
          <h4 class="text-gray-600 text-lg">Featured work</h4>
          <NuxtLink
            to="/work"
            class="text-gray-400 hover:text-gray-600 hover:underline hover:underline-offset-2"
            >View All</NuxtLink
          >
        </div>
        <ResourceWork :works="works" />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const featuredArticles = computed(() =>
  useArticles().value.filter((article) => article.featured)
)
const works = useWork()
</script>
