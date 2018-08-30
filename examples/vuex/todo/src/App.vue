<template>
  <div id="app" class="container">
    <div class="columns">
      <div class="main-column column is-half is-offset-one-quarter has-text-centered">
        <AppHeader />
        <router-view/>
        <AppFooter />
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  name: "app",
  components: { AppHeader, AppFooter },
}
</script>

<style lang="scss">
html, body{
  background: #ddd;

  #app {
    font-family: 'Raleway', sans-serif;
    margin-top: 3rem;
    margin-bottom: 3rem;
    
    .main-column {
      border-radius: 10px;
      border: 1px solid #eee;
      padding: 0;
    }
  }
}
</style>
