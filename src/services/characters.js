import { api } from './api'

export const getCharacters = async () => {
  const response = await api.get('/characters')

  const results = response.data.data.results.map(result => ({
    id: result.id,
    name: result.name,
    description: result.description,
    thumbnail: `${result.thumbnail.path}.${result.thumbnail.extension}`
  }))

  return {
    count: response.data.data.count,
    limit: response.data.data.limit,
    offset: response.data.data.offset,
    total: response.data.data.total,
    results
  }
}
