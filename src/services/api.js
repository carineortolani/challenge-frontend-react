import axios from 'axios'
import { MD5 } from 'crypto-js'

const ts = Date.now()
const baseURL = process.env.REACT_APP_BASE_URL
const publicKey = process.env.REACT_APP_PUBLIC_KEY
const privateKey = process.env.REACT_APP_PRIVATE_KEY
const hash = MD5(ts + privateKey + publicKey).toString()

export const api = axios.create({
  baseURL,
  params: { apikey: publicKey, ts, hash }
})

