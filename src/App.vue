<script setup lang="ts">
import type { IData} from '@/types/types.ts'
import Info from '@/components/Info.vue'
import Hightlights from '@/components/Hightlights.vue'
import Location from '@/components/Location.vue'
import Humidity from '@/components/Humidity.vue'
import { computed, onMounted, ref, watch } from 'vue'
import { fetchData} from '@/utils/getWeather'

const city = ref<string>('')
const data = ref<IData | null>(null)

async function setData(){
  const result = await fetchData(city.value)
  if (result?.cod === 200){
    data.value = result
  } else {
    data.value = null
  }
}

const isDataLoaded = computed(()=> {
   return data.value !== null
})

let isFirstLoad = false


onMounted( async ()=>{
  await setData()
  isFirstLoad = true
})

watch(city, setData)
</script>

<template>
  <div class="page">
    <main class="main">
      <div class="container">
        <div class="laptop">
          <div class="sections">
            <Info
              :data="data"
              @input="city = $event" />
            <Hightlights
              v-if='data'
              :data="data" />
          </div>
          <div v-if='!isDataLoaded && isFirstLoad' class='error'>Error: try to check correct city</div>
          <div
            class="sections"
            >
            <section class="section-bottom">
              <Location v-if='data' :coord="data.coord" />
            </section>
            <section class="section-bottom">
              <Humidity v-if='data' :humidity="data.main.humidity" />
            </section>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="sass">
@import "@/assets/sass/wrapper"
</style>