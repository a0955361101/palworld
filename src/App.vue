<script setup>
  import NavBar from './components/NavBar.vue';
</script>

<template>
  <NavBar :paths="[
        { id: 0, pageName: '帕魯詞綴', url: '/' },
        // { id: 1, pageName: '寶可夢', url: '/pokemon' },
    ]">
    </NavBar>
  <router-view></router-view>
</template>

<style>
  #app{
    max-width: 1200px;
    margin: 0 auto;
  }
</style>
