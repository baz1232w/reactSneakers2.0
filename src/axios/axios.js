import axios from 'axios'

const request = axios.create({
    baseURL:"https://63a35aee471b38b2060d3a39.mockapi.io/"
})

export const api = {
    getItems: async ()=>{
        const items = await request.get('/item')
        return items.data
    }
}

