export const capitalizeFirstLetter = (str: string): string => {
   if (!str || !String(str)) return ''
   return str.charAt(0).toUpperCase() + str.slice(1);
}

export const getCurrentDate = (): string => {
   return new Date().toLocaleString('en-EN', {
      weekday: 'short',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
   })
}

export const formattedPressure = (value: number): number => {
   if (!value || Number(value)) return 0
   return Math.round(value * 0.750062)
}

