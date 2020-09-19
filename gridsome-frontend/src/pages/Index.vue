<template>
  <Layout>

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

    <!-- card -->
    <Card v-for="proj in $page.projects.edges" :project="proj.node" :key="proj.id" />
    
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
        categories{
          id
          name
        }
      }
    }
  }
}
</page-query>

<script>
import Card from "~/components/Card";

export default {
  components: {
    Card,
  },
};
</script>
