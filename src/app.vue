<template>
  <div id="app">
    <ul>
      <li><router-link to="/">First</router-link></li>
      <li><router-link to="/secondary">Secondary</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  import store from './store'
  import first from './views/first';
  import secondary from './views/secondary';

  export default {
    components: {
      first,
      secondary
    }
  }
</script>