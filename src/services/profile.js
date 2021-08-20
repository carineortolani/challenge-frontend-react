import { api } from './api'

export const getProfile = async (id) => {
  const response = await api.get('/characters/{characterId}')

  const results = response.data.data.results.map(result => ({
    name: result.name,
    description: result.description,
    thumbnail: `${result.thumbnail.path}.${result.thumbnail.extension}`
  }))

  return { results }
}
