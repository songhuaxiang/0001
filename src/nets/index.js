import * as api from './api'
import axio from 'axios'

const axios = axio.create()

export function login (payload){
    return axios.post(api.login,payload)
}

export function logout (payload){
    return axios.post(api.logout,payload)
}