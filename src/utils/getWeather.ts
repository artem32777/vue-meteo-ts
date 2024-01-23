import { API } from '@/constants/constants'
import type {IData} from '@/types/types'

export async function fetchData(str: string): Promise<IData | null> {
  if (str === '') return await fetchDefaultData()

  return fetchCustomData(str)

  async function fetchDefaultData(): Promise<IData | null> {
    try {
      const position = await new Promise<GeolocationPosition>(
        (resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject)
        },
      )
      const lat = Math.floor(position.coords.latitude * 100) / 100
      const lon = Math.floor(position.coords.longitude * 100) / 100

      const response = await fetch(
        `${API.url}?lat=${lat}&lon=${lon}&units=metric&appid=${API.key}`,
      )
      const data = await response.json()
      if(data.cod && data.cod !== 200){
        alert(data.message)
        return null
      }
      return data
    } catch (e) {
      alert(e)
      return null
    }
  }

  async function fetchCustomData(str : string): Promise<IData | null>  {
    try {
      const response = await fetch(
        `${API.url}?q=${str}&units=metric&appid=${API.key}`,
      )
        const data = await response.json()
      if(data.cod && data.cod !== 200){
        alert(data.message)
        return null
      }
      return data
    } catch (e) {
      alert(e)
      return null
    }
  }

}
