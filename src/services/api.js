import axios from 'axios'
import { MD5 } from 'crypto-js'

const ts = Date.now()
const baseUrl = process.env.REACT_APP_BASE_URL
const publicKey = process.env.REACT_APP_PUBLIC_KEY
const privateKey = process.env.REACT_APP_PRIVATE_KEY
const hash = MD5(ts + privateKey + publicKey).toString()

export const api = axios.create({
  baseUrl,
  params: { apikey: publicKey, ts, hash }
})

