export function setData(key,arr) {
    localStorage.setItem(key,JSON.stringify(arr));
}
export function getData(key) {
   return JSON.parse(localStorage.getItem(key))
}