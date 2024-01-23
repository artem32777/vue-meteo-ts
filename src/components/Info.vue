<script setup lang="ts">
import type { IData } from '@/types/types'
import WeatherSummary from '@/components/weatherSummary.vue'
import { ref } from 'vue'

const city = ref<string>('')

defineProps<{
  data: IData | null
}>()

defineEmits<{
  (e: 'input', city: any): any
}>()


</script>

<template>
  <section class="section section-left">
    <div class="info">
      <div class="city-inner">
        <input
          type="text"
          class="search"
          v-model.trim="city"
          @keyup.enter="$emit('input', city)"
        />
        <button
          class='search-btn'
          @click="$emit('input', city)"
        ></button>
      </div>
      <WeatherSummary
        v-if="data"
        :data="data" />
    </div>
  </section>
</template>

<style scoped lang="sass">
@import "@/assets/sass/app"
</style>
