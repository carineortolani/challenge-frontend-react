import { api } from './api'

export const getCharacters = async (id) => {
  const response = await api.get('/characters/{characterId}/comics')

  const results = response.data.data.results.map(result => ({
    id: result.id,
    title: result.title,
    dates: result.dates,
    prices: result.prices,
    pages: result.pageCount,
    description: result.description,
    images: `${result.images.path}.${result.images.extension}`
  }))

  return {
    count: response.data.data.count,
    limit: response.data.data.limit,
    offset: response.data.data.offset,
    total: response.data.data.total,
    results
  }
}

