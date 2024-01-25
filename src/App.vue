<script setup>
  import NavBar from './components/NavBar.vue';
</script>

<template>
  <NavBar :paths="[
        { id: 0, pageName: '詞綴', url: '/' },
        { id: 1, pageName: '圖鑑', url: '/library' },
        { id: 2, pageName: '培育', url: '/cultivate' },
    ]">
    </NavBar>
  <router-view></router-view>
</template>

<style>
  
</style>
