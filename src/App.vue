<script setup>
  import NavBar from './components/NavBar.vue';
</script>

<template>
  <NavBar :paths="[
        { id: 0, pageName: '詞綴', url: '/' },
        // { id: 1, pageName: '寶可夢', url: '/pokemon' },
    ]">
    </NavBar>
  <router-view></router-view>
</template>

<style>
  
</style>
