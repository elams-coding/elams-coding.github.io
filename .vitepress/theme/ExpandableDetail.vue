<script setup lang="ts">
import { ref } from 'vue'
const open = ref(false)
</script>

<template>
  <div class="expandable-detail">
    <button class="expand-btn" :aria-expanded="open" @click="open = !open">
      <span>{{ open ? 'Réduire' : 'En savoir plus' }}</span>
      <span class="expand-icon" :class="{ 'expand-icon--open': open }">›</span>
    </button>
    <div v-show="open" class="expand-content">
      <slot />
    </div>
  </div>
</template>
