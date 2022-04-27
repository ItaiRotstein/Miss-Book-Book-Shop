import { storageService } from "./storage.service.js"

export const googleSearchService = {
    getBooks
}

function getBooks(term) {
    // return Promise.resolve(

    //     storageService.loadFromStorage('googleBooks')
    // )
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${term}&key=AIzaSyCuG46dfBaZfwBjiQrNKP42RDs1RhRqxdQ`)        
        .then(res => res.data)
}
