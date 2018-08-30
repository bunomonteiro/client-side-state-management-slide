<template>
  <header class="header">
    <div class="overlay"></div>
    <img class="logo" alt="Vue logo" src="../assets/logo.png">
    <div class="header-content has-text-left">
      <h1 class="title is-2">My List</h1>
      <h2 class="subtitle">{{today}}</h2>
    </div>
  </header>
</template>

<script>
export default {
  name: "appHeader",
  data() {
    return {
      today: new Date().toDateString(),
    };
  },
};
</script>


<style lang="scss" scoped>
  .header{
    background-image: url('../assets/bg-header.jpeg');
    background-size: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 250px;
    position: relative;

    .overlay {
      background: #856be4;
      background: -moz-linear-gradient(-45deg, #856be4 0%, #1b99fd 100%);
      background: -webkit-linear-gradient(-45deg, #856be4 0%,#1b99fd 100%);
      background: linear-gradient(135deg, #856be4 0%,#1b99fd 100%);
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#856be4', endColorstr='#1b99fd',GradientType=1 );      
      height: 100%;
      opacity: 0.75;
      position: absolute;
      width: 100%;
      z-index: 0;
    }

    .logo {
      height: 32px;
      position: absolute;
      right: 20px;
      top: 20px;
      width: 32px;
      z-index: 1;
    }

    .header-content{
      padding-left: 20px;
      padding-top: 155px;
      position: relative;

      .title, .subtitle {
        color: #fff;
        font-weight: 300;
      }
    }
  }
</style>

