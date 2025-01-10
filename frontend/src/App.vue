<template>
  <div class="bg-black text-white min-h-screen">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
/* Optional custom global styles */
body {
  font-family: 'Arial', sans-serif;
}
</style>
