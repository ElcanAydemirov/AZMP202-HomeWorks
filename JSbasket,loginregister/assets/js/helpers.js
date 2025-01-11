export function setData(aciq, melumatlar) {
    localStorage.setItem(aciq, JSON.stringify(melumatlar));
}
export function getData(aciq) {
    return JSON.parse(localStorage.getItem(aciq));
}