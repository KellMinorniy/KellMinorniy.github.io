export const capitalizeFirst = (str) => {
    if (!str) return ''

    return str.charAt(0).toUpperCase() + str.slice(1)
}

const PRESSURE_UNIT = 0.750062


export const getPressure = (hpa) => {
    return Math.round(hpa * PRESSURE_UNIT)
}


export const getTime = (second) => {
    return new Date(second * 1000).toLocaleTimeString('ru-RU', {timeZone:'Atlantic/Reykjavik'})
}