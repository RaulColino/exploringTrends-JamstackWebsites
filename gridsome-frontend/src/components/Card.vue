<template>
  <div class="w-full max-w-3xl mx-auto pt-12 px-8">
    <div class="flex-1 flex-row bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
      <!--link -->
      <!-- When clicked, the value of the to prop will be passed to router.push() internally, -->
      <g-link
        :to="{ path: '/projects/' + project.id }"
        class="flex flex-wrap no-underline hover:no-underline"
      >
        <!-- image -->
        <g-image
          :src="`http://localhost:1337${project.thumbnail}`"
          :alt="project.title"
          height="300px"
          class="rounded-t pb-6 align-end"
        />

        <!-- title,date,categories-->
        <div class="px-4 py-2 mt-2 flex items-center">
          <div class="pb-3">
            <h2 class="font-bold text-2xl text-gray-800 tracking-normal">{{ project.title }}</h2>
            <p class="text-sm text-gray-600 my-2 mr-1">{{formatDate(project.date)}}</p>
            <span
              v-for="c in project.categories"
              :key="c.id"
              class="inline-block mt-10 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >{{c.name}}</span>
          </div>
        </div>
      </g-link>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: {
    project: Object,
  },
  metaInfo: {
    title: "Hello, world!",
  },
  methods: {
    formatDate(date) {
      return moment(date).format("MMMM Do YYYY");
    },
  },
};
</script>