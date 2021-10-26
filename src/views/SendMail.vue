<script setup lang="ts">
import Hello from "@/components/Hello.vue";

const name = "Home";
</script>

<template>
  <div class="home">
    <Hello :name="name" />
  </div>
</template>
