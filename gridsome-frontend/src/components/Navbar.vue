<template>
<!--<nav
    :class="{ 'scrolled': !view.atTopOfPage }"
    class="fixed flex w-full bg-transparent border-b-0 items-center justify-between flex-wrap px-4 py-2 m-auto top-0 animated"
  >-->
  <nav
    :class="{ 'scrolled': !view.atTopOfPage }"
    class="sticky flex w-full bg-transparent border-b-0 items-center justify-between flex-wrap px-4 py-2 m-auto top-0 animated"
  >

    <g-link to="/" class="flex items-center text-ui-primary" title="Home">
      <g-image src="~/assets/images/favicon.png" width="48px" />
    </g-link>

    <ul class="uppercase  tracking-wide font-bold flex items-center">
      <li class="ml-2"><a href="#" class="text-gray-800 hover:bg-gray-100 rounded p-2">Projects</a></li>
      <li class="ml-2"><a href="#" class="text-gray-800 hover:bg-gray-100 rounded p-2">About</a></li>
    </ul>


  </nav>
</template>

<style>
nav {
  z-index: 10;
}
nav.scrolled {
  @apply shadow-2xl;
  background-color: #fff;
  /*border-bottom: 0px;*/
}
</style>

<script>
export default {
  props: {
    theme: {
      type: String,
    },
  },
  data: function () {
    return {
      view: {
        atTopOfPage: true,
      },
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    // the function to call when the user scrolls, added as a method
    handleScroll() {
      // when the user scrolls, check the pageYOffset
      if (window.pageYOffset > 0) {
        // user is scrolled
        if (this.view.atTopOfPage) this.view.atTopOfPage = false;
      } else {
        // user is at top of page
        if (!this.view.atTopOfPage) this.view.atTopOfPage = true;
      }
    },
  },
};
</script>