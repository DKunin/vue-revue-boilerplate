<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import store from './store'
  import sample from './views/sample';

  export default {
    components: {
      sample
    }
  }
</script>