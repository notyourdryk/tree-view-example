<script setup lang="ts">
import "./TreeView.style.css";
import { type Node } from "./types";

const { root } = defineProps<{ root: Node }>();
</script>
<template>
  <li>
    <div class="list-item">{{ root.title }}</div>
    <div v-if="root.children.length > 0" class="list-container">
      <ul>
        <TreeView v-for="child in root.children" :key="child.id" :root="child" />
      </ul>
    </div>
  </li>
</template>