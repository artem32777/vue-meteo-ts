export interface IData{
  cod: number
  message: string
  main: {
    temp: number
    humidity: number
    pressure: number
  }
  name: string
  coord: {
    lat: number
    lon: number
  }
  weather: {
    description: string
  }[]
  sys: {
    country: string
    sunrise: number
    sunset: number
  }
  timezone: number
  wind: {
    deg: number
    speed: number
    gust?: number
  }
  clouds:{
    all: number
  }
}