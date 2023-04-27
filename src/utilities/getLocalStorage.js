export const getLocalStorage = () => {
    const json = localStorage.getItem('cart')
    let items
    if(json){
        items = JSON.parse(json)
    }
    return items || []
}