<script setup lang="ts">
defineProps<{
  humidity: number
}>()
</script>

<template>
  <div class="block-bottom">
    <div class="block-bottom-inner">
      <div class="block-bottom-pic pic-humidity"></div>
      <div class="block-bottom-texts">
        <div class="block-bottom-text-block">
          <div class="block-bottom-text-block-title">
            Humidity: {{ humidity }} %
          </div>
          <div class="block-bottom-text-block-desc">
            Humidity is the concentration of water vapor present in the air.
            Water vapor, the gaseous state of water, is generally invisible to
            the human eye.
            <br /><br />
            The same amount of water vapor results in higher relative humidity
            in cool air than warm air.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.pic-humidity
  background-image: url('@/assets/img/humidity.png')
</style>
