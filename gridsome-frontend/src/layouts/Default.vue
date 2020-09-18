<!-- Layouts are Vue Components that are used inside Pages and Templates to wrap 
the content. A layout usually contains Header & Footer. -->

<template>
  <div class="dark:bg-black">
    <navbar/>
    <slot/>
    <v-footer/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navbar from "~/components/Navbar";
import VFooter from "~/components/Footer";
export default {
  components: {
    Navbar,
    VFooter
  },
  methods: {
    setTheme(mode) {
      this.theme = mode;
    }
  }
};
</script>


