<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!--<g-image alt="Example image" src="~/assets/images/mountain.jpg" width="screen-width" height="900"/>

    
    <h1>Hello, world!</h1>

    <p class="text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>-->

    <h1 class="text-3xl my-20 items-center text-center">Hello, Gridsome+Tailwind+Strapi!</h1>

    <div class="text-center mx-8">
          <p
      class="mb-4"
    >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores</p>

    <p class="mb-4">
      <a
        class="mr-4 text-teal-600 hover:underline"
        href="https://gridsome.org/docs"
        target="_blank"
        rel="noopener"
      >Gridsome Docs</a>
      <a
        class="mr-4 text-teal-600 hover:underline"
        href="https://github.com/gridsome/gridsome"
        target="_blank"
        rel="noopener"
      >GitHub</a>
    </p>
    </div>

    <div
      v-for="edge in $page.projects.edges"
      :key="edge.node.id"
      class="mx-auto px-4 py-8 max-w-xl my-20"
    >
      <div class="bg-white shadow-2xl rounded-lg mb-6 tracking-wide">
        <div class="md:flex-shrink-0">
          <img
            :src="`http://localhost:1337${edge.node.thumbnail}`"
            :alt="edge.node.title"
            class="w-full h-64 rounded-lg rounded-b-none"
          />
        </div>
        <div class="px-4 py-2 mt-2 flex items-center justify-between">
          <div>
            <h2 class="font-bold text-2xl text-gray-800 tracking-normal">{{ edge.node.title }}</h2>
            <p class="text-sm text-gray-600 my-2 mr-1">{{formatDate(edge.node.date)}}</p>
          </div>
          <!-- When clicked, the value of the to prop will be passed to router.push() internally, -->
          <g-link :to="`/projects/${edge.node.id}`"  class="text-blue-500 text-xm -ml-3">Read more</g-link>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query{
  projects: allProjects{
    edges{
      node{
        id
        title
        date
        thumbnail
        image
        description
      }
    }
  }
}
</page-query>

<script>
import moment from 'moment'

export default {
  metaInfo: {
    title: "Hello, world!",
  },
  methods:{
    formatDate(date){
      return moment(date).format('MMMM Do YYYY')
    }
  }
};

</script>
