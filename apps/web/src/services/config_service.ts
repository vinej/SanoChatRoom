export const ROOT_URL: string = 'http://localhost:8000'
export const WSS_URL: string = 'ws://localhost:5000'
export const API_URL: string = 'http://localhost:3090/api'
export const HEADERS = function () {
  let token = localStorage.getItem('remux-token')
  return { headers: { Authorization: `Bearer ${token}`} }
}
export const PARAMETERS = function () {
  return ''
}
