<script setup lang="ts">
import "./TreeView.style.css";
import TreeView from "./TreeView.vue";
import { state } from "./state";
</script>

<template>
  <h1 class="mt-2">Tree node view example</h1>
  <ul>
    <TreeView :root="state"/>
  </ul>
</template>