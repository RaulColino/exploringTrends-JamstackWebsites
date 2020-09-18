<template>
  <Layout>
    <h1 class="text-xl">{{ $page.projects.title }}</h1>
    <img :src="`http://localhost:1337${$page.projects.image}`">
    <p class="p-20 text-center">{{ $page.projects.description }}</p>
  </Layout>
</template>

<page-query>
query($id: ID!){
  projects(id: $id) {
    id
    title
    image
    date
    description
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.projects.title,
    }
  }
}
</script>