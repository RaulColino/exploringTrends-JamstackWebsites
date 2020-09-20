<template>
  <Layout>

    <!-- breadcrumb -->
    <div class="text-black font-bold mt-12 ml-6 xl:ml-64" aria-label="Breadcrumb">
      <ol class="list-none p-0 inline-flex">
        <li class="flex items-center">
          <a href="/">Home</a>
          <svg class="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
          >
            <path
                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
              />
          </svg>
        </li>
        <li>
          <a href="#" class="text-gray-500" aria-current="page">{{$page.projects.title}}</a>
        </li>
      </ol>
    </div>

    <!--article header-->
    <div class="text-center pb-10 pt-32 md:pt-40">
      <!--Title-->
      <h1
        class="font-bold text-gray-800 break-normal text-3xl md:text-5xl"
      >{{ $page.projects.title }}</h1>
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
    <div class="relative container max-w-5xl mx-auto -mt-20">
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
import moment from "moment";

export default {
  metaInfo() {
    return {
      title: this.$page.projects.title,
    };
  },
  methods: {
    formatDate(date) {
      return moment(date).format("MMMM Do YYYY");
    },
  },
};
</script>
