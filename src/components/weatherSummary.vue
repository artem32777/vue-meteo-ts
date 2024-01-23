<script setup lang="ts">
import type { IData } from '@/types/types'
import { capitalizeFirstLetter, getCurrentDate } from '@/utils/utils'

defineProps< {
  data: IData
}>()
</script>

<template>
  <div class="summary">
    <div
      :style="`background-image: url('/weather-main/${data.weather[0].description}.png');`"
      class="pic-main"></div>
    <div class="weather">
      <div class="temp">{{ Math.round(data.main.temp) }} °C</div>
      <div class="weather-desc text-block">
        {{ capitalizeFirstLetter(data.weather[0].description) }}
      </div>
    </div>
    <div class="city text-block">
      {{ data.name }}, {{ data.sys.country }}
    </div>
    <div class="date text-block">{{ getCurrentDate() }}</div>
  </div>
</template>

<style scoped lang="sass">
@import "@/assets/sass/weatherSummary"
</style>
