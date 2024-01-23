<script setup lang="ts">
import type { IData } from '@/types/types'
import { formattedPressure } from '@/utils/utils'

const props = defineProps<{
  data: IData
}>()

function getSunTime(value: number): string {
  if (!value || !Number(value)) return 'unknown time'
  const time = value + props.data.timezone
  return new Date(time * 1000).toLocaleTimeString('ru-RU', {
    timeZone: 'Atlantic/Reykjavik',
  })
}

</script>

<template>
  <section class="section section-right">
    <div class="section highlights">
      <div class="title">Today's Highlights</div>
      <div class="highlights-wrapper">
        <div class="highlight">
          <div class="card">
            <div class="card-title">Wind</div>
            <div class="card-pic card-pic--wind"></div>
            <div class="card-info">
              <div class="card-justify">
                <div class="info-main">
                  <div class="info-main-num">{{ data?.wind?.speed }}</div>
                  <div class="info-main-text">m/s</div>
                </div>
                <div class="info-main">
                  <div class="info-main-num">{{ data?.wind?.deg }}</div>
                  <div class="info-main-text">deg</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-small">
            <div class="card-small-title">Wind gusts</div>
            <div class="card-small-info">
              <div
                v-if="data?.wind?.gust"
                class="card-small-data">
                <div class="info-main-num">
                  {{ Math.round(data?.wind?.gust) }}
                </div>
                <div class="info-main-text">m/s</div>
              </div>
              <div class="card-small-hint">
                <div class="card-small-pic card-small-pic--wind"></div>
                <div class="card-small-text text-egorova">
                  Learn
                  <a
                    href="https://www.windy.com/articles/weather-phenomena-what-s-the-difference-between-sustained-winds-and-wind-gusts-10390?satellite,7.787,115.115,5"
                    target="_blank"
                  >more</a
                  >
                  about gusts
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="highlight">
          <div class="card">
            <div class="card-title">Pressure</div>
            <div class="card-pic card-pic--pressure"></div>
            <div class="card-info">
              <div class="card-centered">
                <div class="info-main">
                  <div class="info-main-num">
                    {{ formattedPressure(data.main.pressure) }}
                  </div>
                  <div class="info-main-text">mm</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-small">
            <div class="card-small-title">Feels like</div>
            <div class="card-small-info">
              <div class="card-small-data">
                <div class="info-main-num">
                  {{ Math.round(data.main.temp) }}
                </div>
                <div class="info-main-text">°C</div>
              </div>
              <div class="card-small-hint">
                <div
                  class="card-small-pic card-small-pic--margin card-small-pic--pressure"></div>
                <div class="card-small-text">How hot or cold it really feels</div>
              </div>
            </div>
          </div>
        </div>
        <div class="highlight">
          <div class="card">
            <div class="card-title">Sunrise and sunset</div>
            <div class="card-pic card-pic--sun"></div>
            <div class="card-info">
              <div class="states">
                <div class="state">
                  <div class="state-pic"></div>
                  <div class="state-title">Sunrise</div>
                  <div class="state-time">
                    {{ getSunTime(data?.sys?.sunrise) }}
                  </div>
                </div>
                <div class="state">
                  <div class="state-pic state-pic--flipped"></div>
                  <div class="state-title">Sunset</div>
                  <div class="state-time">{{ getSunTime(data?.sys?.sunset) }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-small">
            <div class="card-small-title">Cloudiness</div>
            <div class="card-small-info">
              <div class="card-small-data">
                <div class="info-main-num">{{ data?.clouds.all }}</div>
                <div class="info-main-text">%</div>
              </div>
              <div class="card-small-hint">
                <div class="card-small-pic card-small-pic--sun"></div>
                <div class="card-small-text">
                  The sky fraction obscured by clouds
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped lang="sass">
@import "@/assets/sass/highlights"
</style>
