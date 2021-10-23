<script setup lang="ts">
import Hello from "@/components/Hello.vue";

const name = "About";
</script>

<template>
  <div class="about">
    <Hello :name="name" />
  </div>
</template>
