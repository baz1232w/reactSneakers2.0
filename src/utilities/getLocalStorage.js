export const getLocalStorage = () => {
    const json = localStorage.getItem('cart')
    let items
    if(json){
        items = JSON.parse(json)
    }
    return items || []
}

export const getTotalPrice = () => {
    const json = localStorage.getItem('totalPrice')
    let totalPrice
    if(json){
        totalPrice = JSON.parse(json)
    }
    return totalPrice || 0
}