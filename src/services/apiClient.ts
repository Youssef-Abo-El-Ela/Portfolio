import axios from "axios"

export const quoteApiClient = axios.create({
    baseURL: "https://dummyjson.com/quotes/random",
    headers: {
        "Content-Type": "application/json",
    },
})

export const blogApiClient = axios.create({
    baseURL: "https://dev.to/api/articles",
    headers: {
        "Content-Type": "application/json",
    },
})

export const githubApiClient = axios.create({
    baseURL: "https://api.github.com/users/Youssef-Abo-El-Ela/repos",
    headers: {
        "Content-Type": "application/json",
    },
})