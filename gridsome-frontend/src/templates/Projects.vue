<template>
  <Layout>
    
     <!--article header-->
    <div class="text-center pb-10 pt-32 md:pt-40">
      <!--Title-->
      <h1 class="font-bold text-gray-800 break-normal text-3xl md:text-5xl">
        {{ $page.projects.title }}
      </h1>
      <!--date-->
      <p class="text-md md:text-base uppercase text-teal-500 font-bold">
        - {{ formatDate($page.projects.date) }} -
        <span class="text-gray-900"></span>
      </p>
    </div>



    <!--image-->
    <img
      class="static mx-auto w-full max-w-6xl mt-8"
      :src="`http://localhost:1337${$page.projects.image}`"
    />

    <!--container-->
    <div class="relative container max-w-5xl mx-auto -mt-32">
      <div class="mx-0 sm:mx-6">
        <div
          class="bg-white rounded p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal shadow-md m-5"
        >
          <!--Post Content-->
          <!--Paragraph custom font-- <p class="font-serif"> --/Paragraph custom font-->
          {{ $page.projects.description }}
          <!--/ Post Content-->
        </div>
      </div>
    </div>
    <!--/container-->
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
import moment from 'moment'

export default {
  metaInfo() {
    return {
      title: this.$page.projects.title,
    };
  },
  methods: {
    formatDate(date) {
      return moment(date).format('MMMM Do YYYY');
    }
  }
};
</script>
