<script setup lang="ts">
import Hello from "@/components/Hello.vue";

const name = "Home";
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Hello :name="name" />
  </div>
</template>
